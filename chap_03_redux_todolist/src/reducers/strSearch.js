import * as types from '../constants/ActionTypes'

const default_state = ''

const strSearch = (state = default_state, action) => {
    switch (action.type) {
        case types.GO_SEARCH:
            return action.keyword

        case types.CLEAR_SEARCH:
            return ''

        default:
            return state
    }
}

export default strSearch