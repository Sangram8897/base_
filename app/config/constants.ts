
export const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'
export const FORM_STATE_CLEAR = 'FORM_STATE_CLEAR'

export const task_status = [
    { label: 'Open', value: 'OPEN', search: 'Open' },
    { label: 'In Progress', value: 'IN_PROGRESS', search: 'In Progress' },
    { label: 'Paused', value: 'PAUSED', search: 'Paused' },
    { label: 'Completed', value: 'COMPLETED', search: 'Completed' },
    { label: 'Reopen', value: 'REOPEN', search: 'Completed' },
    { label: 'Done', value: 'DONE', search: 'Completed' },
]

export const task_status_obj: Record<string, string> = {
    OPEN: 'Open',
    IN_PROGRESS: 'In Progress',
    PAUSED: 'Paused',
    COMPLETED: 'Completed',
    REOPEN: 'Reopen',
    DONE: 'Done',
};

export const task_status_colors: Record<string, string> = {
    OPEN: '#FFA500',     // Orange
    IN_PROGRESS: '#FFD700', // Yellow
    PAUSED: '#808080',    // Gray
    COMPLETED: '#0000FF', // Blue
    REOPEN: '#FF0000',    // Red
    DONE: '#008000',  // Green
};
