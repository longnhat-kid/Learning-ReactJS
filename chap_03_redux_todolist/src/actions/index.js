import * as types from '../constants/ActionTypes'

export const actOpenForm = () => ({type: types.OPEN_FORM})
export const actCloseForm = () => ({type: types.CLOSE_FORM})
export const actToggleForm = () => ({type: types.TOGGLE_FORM})
export const actEditTask = (task_initial) => ({type: types.EDIT_TASK, task_initial})
export const actGoSearch = (keyword) => ({type: types.GO_SEARCH, keyword})
export const actClearSearch = () => ({type: types.CLEAR_SEARCH})
export const actSort = (sortType) => ({type: types.SORT, sortType})
export const actDelete = (id) => ({type: types.DELETE, id})
export const actSubmitForm = (task) => ({type: types.SUBMIT_FORM, task})