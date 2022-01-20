import * as types from '../constants/ActionTypes'
import * as keys from '../constants/KeySpecs'

const default_state = keys.READY_TO_ADD

const notification = (state = default_state, action) => {
    switch (action.type) {
        case types.CHANGE_NOTIFICATION:
            return action.content
        default:
            return state
    }
}

export default notification