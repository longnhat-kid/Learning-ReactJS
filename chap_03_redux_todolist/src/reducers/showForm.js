import * as types from '../constants/ActionTypes'

const default_state = {
    isShowForm: false,
    task_initial: { id: '', content: '', level: 'Small' }
}

const showForm = (state = default_state, action) => {
    switch (action.type) {
        case types.OPEN_FORM:
            return {
                ...state,
                isShowForm: true
            }

        case types.CLOSE_FORM:
            return {
                ...state,
                isShowForm: false,
                task_initial: { id: '', content: '', level: 'Small' }
            }

        case types.TOGGLE_FORM:
            return {
                ...state,
                isShowForm: !state.isShowForm
            }

        case types.EDIT_TASK:
            return {
                ...state,
                isShowForm: true,
                task_initial: action.task_initial
            }

        default:
            return state
    }
}

export default showForm