import { Workspace, UxListMenuConfig, Form, List, default_view } from '@servicenow/sdk/core'

// ─── Navigation Config ────────────────────────────────────────────────────────

const listConfig = UxListMenuConfig({
    $id: Now.ID['meeting-nav-config'],
    name: 'Meeting Notes & Action Tracker Nav',
    active: true,
    categories: [
        {
            $id: Now.ID['meetings-category'],
            title: 'Meetings',
            active: true,
            order: 100,
            lists: [
                {
                    $id: Now.ID['all-meetings-list'],
                    title: 'All Meetings',
                    table: 'x_mtg_notes_meeting' as 'task',
                    active: true,
                    columns: 'number,title,host,meeting_date,status',
                    order: 100,
                },
            ],
        },
        {
            $id: Now.ID['scheduled-meetings-category'],
            title: 'Upcoming Meetings',
            active: true,
            order: 150,
            lists: [
                {
                    $id: Now.ID['scheduled-meetings-list'],
                    title: 'Upcoming Meetings',
                    table: 'x_mtg_notes_meeting' as 'task',
                    active: true,
                    fixedQuery: 'status=scheduled',
                    columns: 'number,title,host,meeting_date,status',
                    order: 100,
                },
            ],
        },
        {
            $id: Now.ID['action-items-category'],
            title: 'Action Items',
            active: true,
            order: 200,
            lists: [
                {
                    $id: Now.ID['all-action-items-list'],
                    title: 'All Action Items',
                    table: 'x_mtg_notes_action_item' as 'task',
                    active: true,
                    columns: 'title,meeting,assigned_to,due_date,status',
                    order: 100,
                },
            ],
        },
        {
            $id: Now.ID['open-action-items-category'],
            title: 'Open Action Items',
            active: true,
            order: 300,
            lists: [
                {
                    $id: Now.ID['open-action-items-list'],
                    title: 'Open Action Items',
                    table: 'x_mtg_notes_action_item' as 'task',
                    active: true,
                    fixedQuery: 'status=open^ORstatus=in_progress',
                    columns: 'title,meeting,assigned_to,due_date,status',
                    order: 100,
                },
            ],
        },
    ],
})

// ─── Workspace ────────────────────────────────────────────────────────────────

Workspace({
    $id: Now.ID['meeting-workspace'],
    title: 'Meeting Notes & Action Tracker',
    path: 'meeting-tracker',
    landingPath: '/list',
    active: true,
    listConfig: listConfig,
    tables: [
        'x_mtg_notes_meeting' as 'task',
        'x_mtg_notes_action_item' as 'task',
    ],
})

// ─── Meeting Form Layout ──────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
Form({
    table: 'x_mtg_notes_meeting' as any,
    view: default_view,
    sections: [
        {
            caption: 'Meeting Information',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { type: 'table_field', field: 'number' },
                        { type: 'table_field', field: 'host' },
                        { type: 'table_field', field: 'meeting_date' },
                    ],
                    rightElements: [
                        { type: 'table_field', field: 'title' },
                        { type: 'table_field', field: 'status' },
                        { type: 'table_field', field: 'participants' },
                    ],
                },
            ],
        },
        {
            caption: 'Meeting Notes',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        { type: 'table_field', field: 'description' },
                    ],
                },
            ],
        },
        {
            caption: 'Action Items',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            type: 'list',
                            listType: '12M',
                            listRef: 'x_mtg_notes_action_item.meeting',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Activity',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            type: 'formatter',
                            formatterRef: 'Activities_Filtered',
                        },
                    ],
                },
            ],
        },
    ],
})

// ─── Action Item Form Layout ──────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
Form({
    table: 'x_mtg_notes_action_item' as any,
    view: default_view,
    sections: [
        {
            caption: 'Action Item Details',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { type: 'table_field', field: 'title' },
                        { type: 'table_field', field: 'assigned_to' },
                        { type: 'table_field', field: 'due_date' },
                    ],
                    rightElements: [
                        { type: 'table_field', field: 'meeting' },
                        { type: 'table_field', field: 'status' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        { type: 'table_field', field: 'description' },
                    ],
                },
            ],
        },
        {
            caption: 'Activity',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            type: 'formatter',
                            formatterRef: 'Activities_Filtered',
                        },
                    ],
                },
            ],
        },
    ],
})

// ─── List Views ───────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
List({
    table: 'x_mtg_notes_meeting' as any,
    view: default_view,
    columns: ['number', 'title', 'host', 'meeting_date', 'status'],
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
List({
    table: 'x_mtg_notes_action_item' as any,
    view: default_view,
    columns: ['title', 'meeting', 'assigned_to', 'due_date', 'status'],
})
