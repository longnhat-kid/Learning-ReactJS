import {combineReducers} from 'redux'
import tasks from './tasks'
import showForm from './showForm'
import strSearch from './strSearch'
import sort from './sort'

const appReducers = combineReducers({
    tasks,
    showForm,
    strSearch,
    sort
})

export default appReducers