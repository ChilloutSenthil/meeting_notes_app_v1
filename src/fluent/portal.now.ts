import { SPWidget, SPPage, ServicePortal } from '@servicenow/sdk/core'

// ─── Meeting App Widget ───────────────────────────────────────────────────────

const meetingAppWidget = SPWidget({
    $id: Now.ID['meeting-app-widget'],
    name: 'Meeting Notes & Action Tracker',
    id: 'mtg-notes-app',
    category: 'custom',
    description: 'Full meeting lifecycle management: create meetings, track history, and manage action items.',

    serverScript: /* javascript */ `
(function() {
    // ── helpers defined first to avoid Rhino hoisting edge cases ──

    var toSnDate = function(raw) {
        // datetime-local sends "2025-05-11T14:30" — convert to "2025-05-11 14:30:00"
        if (!raw) return '';
        var s = raw.replace('T', ' ');
        if (s.length === 16) s += ':00';
        return s;
    };

    var loadMeetings = function() {
        var gr = new GlideRecord('x_mtg_notes_meeting');
        gr.orderByDesc('meeting_date');
        gr.query();
        data.meetings = [];
        while (gr.next()) {
            var agg = new GlideAggregate('x_mtg_notes_action_item');
            agg.addQuery('meeting', gr.sys_id);
            agg.addAggregate('COUNT');
            agg.query();
            var cnt = agg.next() ? parseInt(agg.getAggregate('COUNT'), 10) : 0;
            data.meetings.push({
                sys_id:       gr.sys_id + '',
                number:       gr.getValue('number'),
                title:        gr.getValue('title'),
                host:         gr.host.getDisplayValue(),
                meeting_date: gr.meeting_date.getDisplayValue(),
                status:       gr.getValue('status'),
                action_count: cnt,
            });
        }
    };

    var loadUsers = function() {
        var gr = new GlideRecord('sys_user');
        gr.addActiveQuery();
        gr.orderBy('name');
        gr.setLimit(200);
        gr.query();
        data.users = [];
        while (gr.next()) {
            data.users.push({
                value: gr.sys_id + '',
                label: gr.getDisplayValue(),
            });
        }
    };

    var getMeeting = function(sysId) {
        var gr = new GlideRecord('x_mtg_notes_meeting');
        if (!gr.get(sysId)) return;
        data.meeting = {
            sys_id:               gr.sys_id + '',
            number:               gr.getValue('number'),
            title:                gr.getValue('title'),
            description:          gr.getValue('description') || '',
            host:                 gr.host.getDisplayValue(),
            host_value:           gr.getValue('host'),
            meeting_date:         gr.meeting_date.getDisplayValue(),
            status:               gr.getValue('status'),
            participants_display: gr.participants.getDisplayValue() || 'None',
        };
        var aiGr = new GlideRecord('x_mtg_notes_action_item');
        aiGr.addQuery('meeting', sysId);
        aiGr.orderBy('due_date');
        aiGr.query();
        data.action_items = [];
        while (aiGr.next()) {
            data.action_items.push({
                sys_id:      aiGr.sys_id + '',
                title:       aiGr.getValue('title'),
                description: aiGr.getValue('description') || '',
                assigned_to: aiGr.assigned_to.getDisplayValue() || 'Unassigned',
                due_date:    aiGr.due_date.getDisplayValue() || '',
                status:      aiGr.getValue('status'),
            });
        }
    };

    var createMeeting = function(d) {
        var gr = new GlideRecord('x_mtg_notes_meeting');
        gr.initialize();
        gr.setValue('title', d.title);
        gr.setValue('description', d.description || '');
        gr.setValue('meeting_date', toSnDate(d.meeting_date));
        gr.setValue('host', d.host || '');
        gr.setValue('status', d.status || 'draft');
        gr.insert();
        data.save_success = true;
        loadMeetings();
    };

    var createActionItem = function(d) {
        var gr = new GlideRecord('x_mtg_notes_action_item');
        gr.initialize();
        gr.setValue('title', d.title);
        gr.setValue('description', d.description || '');
        gr.setValue('assigned_to', d.assigned_to || '');
        gr.setValue('due_date', d.due_date || '');
        gr.setValue('status', d.status || 'open');
        gr.setValue('meeting', d.meeting);
        gr.insert();
        data.save_success = true;
        getMeeting(d.meeting);
    };

    var updateActionItemStatus = function(sysId, status) {
        var gr = new GlideRecord('x_mtg_notes_action_item');
        if (gr.get(sysId)) {
            gr.setValue('status', status);
            gr.update();
        }
    };

    // ── dispatch ──

    if (!input) {
        loadUsers();
        loadMeetings();
        return;
    }

    // always keep users fresh so dropdowns work after a POST
    loadUsers();

    if (input.action === 'create_meeting') {
        createMeeting(input);
    } else if (input.action === 'reload_list') {
        loadMeetings();
    } else if (input.action === 'get_meeting') {
        getMeeting(input.sys_id);
    } else if (input.action === 'create_action_item') {
        createActionItem(input);
    } else if (input.action === 'update_action_item_status') {
        updateActionItemStatus(input.sys_id, input.status);
        getMeeting(input.meeting_sys_id);
    }
})();
`,

    clientScript: /* javascript */ `
function($scope, $sce, $window) {
    var c = this;

    c.goHome = function() { $window.location.href = '/sp'; };

    c.view = 'list';
    c.meetings    = $scope.data.meetings || [];
    c.users       = $scope.data.users    || [];
    c.actionItems = [];
    c.currentMeeting = null;
    c.showActionForm = false;
    c.searchText     = '';
    c.filterStatus   = '';
    c.saving         = false;
    c.saveError      = null;

    c.newMeeting = { status: 'draft' };
    c.newAction  = { status: 'open'  };

    c.statusLabel = {
        draft:     'Draft',
        scheduled: 'Scheduled',
        completed: 'Completed',
        cancelled: 'Cancelled',
    };
    c.statusClass = {
        draft:     'label-default',
        scheduled: 'label-info',
        completed: 'label-success',
        cancelled: 'label-danger',
    };
    c.actionStatusLabel = {
        open:        'Open',
        in_progress: 'In Progress',
        completed:   'Completed',
        cancelled:   'Cancelled',
    };
    c.actionStatusClass = {
        open:        'label-warning',
        in_progress: 'label-info',
        completed:   'label-success',
        cancelled:   'label-default',
    };

    c.filteredMeetings = function() {
        return (c.meetings || []).filter(function(m) {
            var search = c.searchText.toLowerCase();
            var matchText = !search ||
                (m.title  || '').toLowerCase().indexOf(search) >= 0 ||
                (m.host   || '').toLowerCase().indexOf(search) >= 0 ||
                (m.number || '').toLowerCase().indexOf(search) >= 0;
            var matchStatus = !c.filterStatus || m.status === c.filterStatus;
            return matchText && matchStatus;
        });
    };

    c.showCreate = function() {
        c.newMeeting = { status: 'draft' };
        c.saveError  = null;
        c.view = 'create';
    };

    c.backToList = function() {
        c.view = 'list';
        c.showActionForm = false;
    };

    c.openMeeting = function(sysId) {
        $scope.data.action = 'get_meeting';
        $scope.data.sys_id = sysId;
        $scope.server.update().then(function() {
            c.currentMeeting = $scope.data.meeting;
            if (c.currentMeeting && c.currentMeeting.description) {
                c.currentMeeting.descriptionHtml = $sce.trustAsHtml(c.currentMeeting.description);
            }
            c.actionItems    = $scope.data.action_items || [];
            c.showActionForm = false;
            c.view = 'detail';
        }, function() {
            // stay on list
        });
    };

    c.saveMeeting = function() {
        if (!c.newMeeting.title) return;
        c.saving    = true;
        c.saveError = null;
        $scope.data.action       = 'create_meeting';
        $scope.data.title        = c.newMeeting.title;
        $scope.data.description  = c.newMeeting.description || '';
        $scope.data.meeting_date = c.newMeeting.meeting_date || '';
        $scope.data.host         = c.newMeeting.host || '';
        $scope.data.status       = c.newMeeting.status;
        $scope.server.update().then(function() {
            c.meetings = $scope.data.meetings || [];
            c.saving   = false;
            c.view     = 'list';
        }, function() {
            c.saving    = false;
            c.saveError = 'Failed to save. Please try again.';
        });
    };

    c.showAddAction = function() {
        c.newAction = { status: 'open', meeting: c.currentMeeting.sys_id };
        c.showActionForm = true;
    };

    c.saveAction = function() {
        if (!c.newAction.title) return;
        c.saving = true;
        $scope.data.action      = 'create_action_item';
        $scope.data.title       = c.newAction.title;
        $scope.data.description = c.newAction.description || '';
        $scope.data.assigned_to = c.newAction.assigned_to || '';
        $scope.data.due_date    = c.newAction.due_date || '';
        $scope.data.status      = c.newAction.status;
        $scope.data.meeting     = c.currentMeeting.sys_id;
        $scope.server.update().then(function() {
            c.actionItems    = $scope.data.action_items || [];
            c.showActionForm = false;
            c.newAction      = { status: 'open' };
            c.saving         = false;
        }, function() {
            c.saving = false;
        });
    };

    c.markDone = function(ai) {
        $scope.data.action         = 'update_action_item_status';
        $scope.data.sys_id         = ai.sys_id;
        $scope.data.status         = 'completed';
        $scope.data.meeting_sys_id = c.currentMeeting.sys_id;
        $scope.server.update().then(function() {
            c.actionItems = $scope.data.action_items || [];
        }, function() {});
    };
}
`,

    htmlTemplate: `
<div class="mtg-app">

  <!-- ── HEADER ── -->
  <div class="mtg-header">
    <div class="mtg-header-inner">
      <a class="mtg-logo" ng-click="c.goHome()" style="cursor:pointer;">
        <i class="fa fa-calendar-check-o"></i>
        Meeting Notes &amp; Action Tracker
      </a>
      <div class="mtg-header-actions">
        <button class="btn btn-primary btn-sm" ng-if="c.view === 'list'" ng-click="c.showCreate()">
          <i class="fa fa-plus"></i> New Meeting
        </button>
        <button class="btn btn-link btn-sm mtg-back-btn" ng-if="c.view !== 'list'" ng-click="c.backToList()">
          <i class="fa fa-chevron-left"></i> Back to Meetings
        </button>
      </div>
    </div>
  </div>

  <!-- ════════════════════════════════════════ LIST VIEW ══ -->
  <div ng-if="c.view === 'list'" class="mtg-body">

    <!-- Search + Filter bar -->
    <div class="mtg-toolbar">
      <div class="mtg-search-wrap">
        <i class="fa fa-search mtg-search-icon"></i>
        <input class="mtg-search-input" type="text"
               placeholder="Search by title, host, or number…"
               ng-model="c.searchText">
      </div>
      <select class="mtg-select" ng-model="c.filterStatus">
        <option value="">All Statuses</option>
        <option value="draft">Draft</option>
        <option value="scheduled">Scheduled</option>
        <option value="completed">Completed</option>
        <option value="cancelled">Cancelled</option>
      </select>
    </div>

    <!-- Cards grid -->
    <div class="mtg-grid" ng-if="c.filteredMeetings().length > 0">
      <div class="mtg-card"
           ng-repeat="m in c.filteredMeetings()"
           ng-click="c.openMeeting(m.sys_id)">
        <div class="mtg-card-top">
          <span class="mtg-number">{{m.number}}</span>
          <span class="label" ng-class="c.statusClass[m.status]">
            {{c.statusLabel[m.status]}}
          </span>
        </div>
        <h4 class="mtg-card-title">{{m.title}}</h4>
        <div class="mtg-card-meta">
          <span><i class="fa fa-user-o"></i> {{m.host}}</span>
          <span ng-if="m.meeting_date"><i class="fa fa-calendar-o"></i> {{m.meeting_date}}</span>
        </div>
        <div class="mtg-card-footer">
          <span class="mtg-badge">
            <i class="fa fa-tasks"></i> {{m.action_count}} action item<span ng-if="m.action_count !== 1">s</span>
          </span>
          <span class="mtg-arrow"><i class="fa fa-chevron-right"></i></span>
        </div>
      </div>
    </div>

    <!-- Empty state -->
    <div class="mtg-empty" ng-if="c.filteredMeetings().length === 0">
      <i class="fa fa-inbox fa-3x"></i>
      <p ng-if="!c.searchText && !c.filterStatus">No meetings yet. Click <strong>New Meeting</strong> to get started.</p>
      <p ng-if="c.searchText || c.filterStatus">No meetings match your search.</p>
    </div>
  </div>

  <!-- ════════════════════════════════════════ CREATE VIEW ══ -->
  <div ng-if="c.view === 'create'" class="mtg-body">
    <div class="mtg-form-card">
      <h3 class="mtg-section-title"><i class="fa fa-plus-circle"></i> New Meeting</h3>

      <div class="mtg-form-row">
        <div class="mtg-form-col mtg-col-8">
          <label class="mtg-label">Title <span class="text-danger">*</span></label>
          <input class="mtg-input" type="text" ng-model="c.newMeeting.title"
                 placeholder="e.g. Q2 Planning Meeting">
        </div>
        <div class="mtg-form-col mtg-col-4">
          <label class="mtg-label">Status</label>
          <select class="mtg-select" ng-model="c.newMeeting.status">
            <option value="draft">Draft</option>
            <option value="scheduled">Scheduled</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <div class="mtg-form-row">
        <div class="mtg-form-col mtg-col-6">
          <label class="mtg-label">Meeting Date &amp; Time</label>
          <input class="mtg-input" type="datetime-local" ng-model="c.newMeeting.meeting_date">
        </div>
        <div class="mtg-form-col mtg-col-6">
          <label class="mtg-label">Host</label>
          <select class="mtg-select" ng-model="c.newMeeting.host">
            <option value="">Select host…</option>
            <option ng-repeat="u in c.users" value="{{u.value}}">{{u.label}}</option>
          </select>
        </div>
      </div>

      <div class="mtg-form-group">
        <label class="mtg-label">Meeting Notes</label>
        <textarea class="mtg-textarea" rows="7" ng-model="c.newMeeting.description"
                  placeholder="Paste agenda, discussion points, or decisions here…"></textarea>
      </div>

      <div class="mtg-form-actions">
        <button class="btn btn-primary" ng-click="c.saveMeeting()" ng-disabled="!c.newMeeting.title || c.saving">
          <i class="fa fa-save"></i> {{c.saving ? 'Saving…' : 'Save Meeting'}}
        </button>
        <button class="btn btn-default" ng-click="c.backToList()" ng-disabled="c.saving">Cancel</button>
      </div>
      <div class="alert alert-danger m-t-sm" ng-if="c.saveError">{{c.saveError}}</div>
    </div>
  </div>

  <!-- ════════════════════════════════════════ DETAIL VIEW ══ -->
  <div ng-if="c.view === 'detail' && c.currentMeeting" class="mtg-body">

    <!-- Meeting header card -->
    <div class="mtg-detail-header">
      <div class="mtg-detail-title-row">
        <div>
          <span class="mtg-number">{{c.currentMeeting.number}}</span>
          <h2 class="mtg-detail-title">{{c.currentMeeting.title}}</h2>
        </div>
        <span class="label label-lg" ng-class="c.statusClass[c.currentMeeting.status]">
          {{c.statusLabel[c.currentMeeting.status]}}
        </span>
      </div>
      <div class="mtg-detail-meta">
        <span><i class="fa fa-user"></i> <strong>Host:</strong> {{c.currentMeeting.host}}</span>
        <span ng-if="c.currentMeeting.meeting_date">
          <i class="fa fa-calendar"></i> <strong>Date:</strong> {{c.currentMeeting.meeting_date}}
        </span>
        <span ng-if="c.currentMeeting.participants_display !== 'None'">
          <i class="fa fa-users"></i> <strong>Participants:</strong> {{c.currentMeeting.participants_display}}
        </span>
      </div>
    </div>

    <!-- Two-column layout: notes | action items -->
    <div class="mtg-detail-body">

      <!-- Notes panel -->
      <div class="mtg-panel mtg-panel-notes">
        <div class="mtg-panel-head"><i class="fa fa-file-text-o"></i> Meeting Notes</div>
        <div class="mtg-panel-body">
          <div ng-if="c.currentMeeting.description"
               ng-bind-html="c.currentMeeting.descriptionHtml"></div>
          <p ng-if="!c.currentMeeting.description" class="mtg-empty-msg">No notes recorded.</p>
        </div>
      </div>

      <!-- Action items panel -->
      <div class="mtg-panel mtg-panel-actions">
        <div class="mtg-panel-head clearfix">
          <span><i class="fa fa-tasks"></i> Action Items</span>
          <button class="btn btn-primary btn-xs pull-right" ng-click="c.showAddAction()">
            <i class="fa fa-plus"></i> Add
          </button>
        </div>

        <!-- New action item form -->
        <div class="mtg-action-form" ng-if="c.showActionForm">
          <div class="mtg-form-row">
            <div class="mtg-form-col mtg-col-12">
              <label class="mtg-label">Title <span class="text-danger">*</span></label>
              <input class="mtg-input" type="text" ng-model="c.newAction.title"
                     placeholder="Action item title">
            </div>
          </div>
          <div class="mtg-form-row">
            <div class="mtg-form-col mtg-col-6">
              <label class="mtg-label">Assigned To</label>
              <select class="mtg-select" ng-model="c.newAction.assigned_to">
                <option value="">Unassigned</option>
                <option ng-repeat="u in c.users" value="{{u.value}}">{{u.label}}</option>
              </select>
            </div>
            <div class="mtg-form-col mtg-col-6">
              <label class="mtg-label">Due Date</label>
              <input class="mtg-input" type="date" ng-model="c.newAction.due_date">
            </div>
          </div>
          <div class="mtg-form-row">
            <div class="mtg-form-col mtg-col-8">
              <label class="mtg-label">Description</label>
              <input class="mtg-input" type="text" ng-model="c.newAction.description"
                     placeholder="Brief description">
            </div>
            <div class="mtg-form-col mtg-col-4">
              <label class="mtg-label">Status</label>
              <select class="mtg-select" ng-model="c.newAction.status">
                <option value="open">Open</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
          <div class="mtg-form-actions">
            <button class="btn btn-success btn-sm" ng-click="c.saveAction()"
                    ng-disabled="!c.newAction.title || c.saving">
              {{c.saving ? 'Saving…' : 'Save'}}
            </button>
            <button class="btn btn-default btn-sm" ng-click="c.showActionForm = false">Cancel</button>
          </div>
        </div>

        <!-- Action items list -->
        <div ng-if="c.actionItems.length > 0">
          <div class="mtg-action-item"
               ng-repeat="ai in c.actionItems"
               ng-class="{'mtg-action-done': ai.status === 'completed'}">
            <div class="mtg-action-top">
              <strong>{{ai.title}}</strong>
              <span class="label" ng-class="c.actionStatusClass[ai.status]">
                {{c.actionStatusLabel[ai.status]}}
              </span>
            </div>
            <div class="mtg-action-meta">
              <span ng-if="ai.assigned_to !== 'Unassigned'">
                <i class="fa fa-user"></i> {{ai.assigned_to}}
              </span>
              <span ng-if="ai.due_date">
                <i class="fa fa-calendar"></i> Due {{ai.due_date}}
              </span>
            </div>
            <p class="mtg-action-desc" ng-if="ai.description">{{ai.description}}</p>
            <button class="btn btn-xs btn-default mtg-done-btn"
                    ng-if="ai.status !== 'completed'"
                    ng-click="c.markDone(ai)">
              <i class="fa fa-check"></i> Mark Done
            </button>
          </div>
        </div>

        <div class="mtg-empty-msg" ng-if="c.actionItems.length === 0 && !c.showActionForm">
          <i class="fa fa-check-circle-o"></i> No action items yet.
        </div>
      </div>

    </div>
  </div>

</div>
`,

    customCss: `
/* ── Base ── */
.mtg-app { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }

/* ── Header ── */
.mtg-header {
  background: linear-gradient(135deg, #1a3a5c 0%, #2471a3 100%);
  padding: 14px 24px;
  border-radius: 6px 6px 0 0;
}
.mtg-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mtg-logo {
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.2px;
  text-decoration: none;
}
.mtg-logo:hover, .mtg-logo:focus { color: rgba(255,255,255,0.85); text-decoration: none; }
.mtg-logo .fa { margin-right: 8px; }
.mtg-back-btn { color: rgba(255,255,255,0.85) !important; }
.mtg-back-btn:hover { color: #fff !important; }

/* ── Body ── */
.mtg-body { padding: 20px 24px; background: #f7f9fc; min-height: 380px; }

/* ── Toolbar ── */
.mtg-toolbar {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.mtg-search-wrap {
  position: relative;
  flex: 1;
  min-width: 200px;
}
.mtg-search-icon {
  position: absolute;
  left: 11px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
}
.mtg-search-input {
  width: 100%;
  padding: 8px 12px 8px 34px;
  border: 1px solid #dde3eb;
  border-radius: 6px;
  font-size: 13px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  transition: border-color 0.15s;
}
.mtg-search-input:focus { outline: none; border-color: #2471a3; }
.mtg-select {
  padding: 8px 12px;
  border: 1px solid #dde3eb;
  border-radius: 6px;
  font-size: 13px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  min-width: 160px;
}

/* ── Card Grid ── */
.mtg-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}
.mtg-card {
  background: #fff;
  border: 1px solid #e4eaf2;
  border-radius: 8px;
  padding: 18px;
  cursor: pointer;
  transition: box-shadow 0.15s, transform 0.1s;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.mtg-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  transform: translateY(-2px);
  border-color: #2471a3;
}
.mtg-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.mtg-number { font-size: 11px; color: #8a9ab5; font-weight: 600; letter-spacing: 0.5px; }
.mtg-card-title {
  font-size: 15px;
  font-weight: 600;
  color: #1a2d42;
  margin: 0 0 8px;
  line-height: 1.35;
}
.mtg-card-meta {
  font-size: 12px;
  color: #6b7a90;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 12px;
}
.mtg-card-meta .fa { margin-right: 4px; }
.mtg-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f0f3f8;
  padding-top: 10px;
  margin-top: 4px;
}
.mtg-badge { font-size: 12px; color: #2471a3; }
.mtg-badge .fa { margin-right: 4px; }
.mtg-arrow { color: #c5cedb; }

/* ── Empty State ── */
.mtg-empty {
  text-align: center;
  padding: 60px 20px;
  color: #a0aec0;
}
.mtg-empty .fa { margin-bottom: 14px; display: block; }
.mtg-empty-msg { color: #a0aec0; font-size: 13px; }

/* ── Form Card ── */
.mtg-form-card {
  background: #fff;
  border: 1px solid #e4eaf2;
  border-radius: 8px;
  padding: 28px 32px;
  max-width: 860px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.mtg-section-title {
  font-size: 18px;
  font-weight: 600;
  color: #1a2d42;
  margin: 0 0 24px;
}
.mtg-section-title .fa { color: #2471a3; margin-right: 8px; }
.mtg-form-row { display: flex; gap: 16px; margin-bottom: 16px; flex-wrap: wrap; }
.mtg-form-col { display: flex; flex-direction: column; }
.mtg-col-4  { flex: 0 0 calc(33.33% - 8px); min-width: 140px; }
.mtg-col-6  { flex: 0 0 calc(50% - 8px);    min-width: 160px; }
.mtg-col-8  { flex: 0 0 calc(66.66% - 8px); min-width: 200px; }
.mtg-col-12 { flex: 0 0 100%; }
.mtg-form-group { margin-bottom: 16px; }
.mtg-label { font-size: 12px; font-weight: 600; color: #4a5568; margin-bottom: 5px; }
.mtg-input, .mtg-textarea {
  padding: 8px 12px;
  border: 1px solid #dde3eb;
  border-radius: 6px;
  font-size: 13px;
  width: 100%;
  transition: border-color 0.15s;
  background: #fff;
}
.mtg-input:focus, .mtg-textarea:focus { outline: none; border-color: #2471a3; }
.mtg-textarea { resize: vertical; }
.mtg-form-actions { margin-top: 24px; display: flex; gap: 10px; }

/* ── Detail Header ── */
.mtg-detail-header {
  background: #fff;
  border: 1px solid #e4eaf2;
  border-radius: 8px;
  padding: 22px 28px;
  margin-bottom: 20px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.mtg-detail-title-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 14px;
}
.mtg-detail-title {
  font-size: 22px;
  font-weight: 700;
  color: #1a2d42;
  margin: 4px 0 0;
}
.label-lg { font-size: 13px; padding: 5px 12px; }
.mtg-detail-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 13px;
  color: #5a6a7e;
}
.mtg-detail-meta .fa { margin-right: 5px; color: #2471a3; }

/* ── Detail Body ── */
.mtg-detail-body { display: flex; gap: 20px; align-items: flex-start; flex-wrap: wrap; }
.mtg-panel {
  background: #fff;
  border: 1px solid #e4eaf2;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  overflow: hidden;
}
.mtg-panel-notes  { flex: 1 1 360px; }
.mtg-panel-actions { flex: 1 1 300px; }
.mtg-panel-head {
  background: #f0f4fa;
  border-bottom: 1px solid #e4eaf2;
  padding: 12px 18px;
  font-size: 13px;
  font-weight: 600;
  color: #2c3e50;
}
.mtg-panel-head .fa { color: #2471a3; margin-right: 7px; }
.mtg-panel-body { padding: 18px; font-size: 13px; color: #3d4c5e; line-height: 1.6; }

/* ── Action Items ── */
.mtg-action-form {
  background: #f8fafc;
  border-bottom: 1px solid #e4eaf2;
  padding: 16px;
}
.mtg-action-item {
  padding: 14px 16px;
  border-bottom: 1px solid #f0f3f8;
  transition: background 0.1s;
}
.mtg-action-item:hover { background: #f8fafc; }
.mtg-action-item:last-child { border-bottom: none; }
.mtg-action-done { opacity: 0.55; }
.mtg-action-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  font-size: 13px;
  color: #1a2d42;
}
.mtg-action-meta {
  font-size: 11px;
  color: #8a9ab5;
  display: flex;
  gap: 12px;
  margin-bottom: 4px;
}
.mtg-action-meta .fa { margin-right: 3px; }
.mtg-action-desc { font-size: 12px; color: #6b7a90; margin: 2px 0 6px; }
.mtg-done-btn { font-size: 11px !important; }
`,
})

// ─── Service Portal Page ──────────────────────────────────────────────────────

const meetingPage = SPPage({
    pageId: 'mtg_notes',
    title: 'Meeting Notes & Action Tracker',
    category: 'custom',
    containers: [
        {
            $id: Now.ID['meeting-page-container'],
            width: 'container-fluid',
            order: 100,
            rows: [
                {
                    $id: Now.ID['meeting-page-row'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['meeting-page-col'],
                            size: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['meeting-app-instance'],
                                    widget: meetingAppWidget,
                                    order: 100,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})

// ─── Service Portal ───────────────────────────────────────────────────────────

ServicePortal({
    $id: Now.ID['meeting-portal'],
    title: 'Meeting Notes Portal',
    urlSuffix: 'mtg_notes',
    homePage: meetingPage,
})
