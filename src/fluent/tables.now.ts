import {
    Table,
    StringColumn,
    HtmlColumn,
    DateTimeColumn,
    DateColumn,
    ReferenceColumn,
    ListColumn,
} from '@servicenow/sdk/core'

export const x_mtg_notes_meeting = Table({
    $id: Now.ID['meeting-table'],
    name: 'x_mtg_notes_meeting',
    label: 'Meeting',
    labelPlural: 'Meetings',
    display: 'title',
    autoNumber: {
        prefix: 'MEET',
        number: 1000001,
        numberOfDigits: 7,
    },
    schema: {
        title: StringColumn({
            label: 'Title',
            mandatory: true,
        }),
        description: HtmlColumn({
            label: 'Meeting Notes',
        }),
        meeting_date: DateTimeColumn({
            label: 'Meeting Date',
        }),
        host: ReferenceColumn({
            label: 'Host',
            referenceTable: 'sys_user',
        }),
        participants: ListColumn({
            label: 'Participants',
            referenceTable: 'sys_user',
        }),
        status: StringColumn({
            label: 'Status',
            choices: {
                draft: { label: 'Draft', sequence: 0 },
                scheduled: { label: 'Scheduled', sequence: 1 },
                completed: { label: 'Completed', sequence: 2 },
                cancelled: { label: 'Cancelled', sequence: 3 },
            },
            dropdown: 'dropdown_without_none',
            default: 'draft',
        }),
    },
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const x_mtg_notes_action_item = Table({
    $id: Now.ID['action-item-table'],
    name: 'x_mtg_notes_action_item',
    label: 'Action Item',
    labelPlural: 'Action Items',
    display: 'title',
    schema: {
        title: StringColumn({
            label: 'Title',
            mandatory: true,
        }),
        description: StringColumn({
            label: 'Description',
            maxLength: 1000,
        }),
        assigned_to: ReferenceColumn({
            label: 'Assigned To',
            referenceTable: 'sys_user',
        }),
        due_date: DateColumn({
            label: 'Due Date',
        }),
        status: StringColumn({
            label: 'Status',
            choices: {
                open: { label: 'Open', sequence: 0 },
                in_progress: { label: 'In Progress', sequence: 1 },
                completed: { label: 'Completed', sequence: 2 },
                cancelled: { label: 'Cancelled', sequence: 3 },
            },
            dropdown: 'dropdown_without_none',
            default: 'open',
        }),
        // Custom table reference — will be correctly typed after first npm run build
        meeting: ReferenceColumn({
            label: 'Meeting',
            referenceTable: 'x_mtg_notes_meeting' as 'sys_user',
        }),
    },
})
