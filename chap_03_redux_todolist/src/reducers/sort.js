import * as types from '../constants/ActionTypes'

const default_state = {
    sortBy: 'Default',
	sortDir: '',
}

const sort = (state = default_state, action) => {
    switch (action.type) {
        case types.SORT:
            return {
                sortBy: action.sortType.sortBy,
	            sortDir: action.sortType.sortDir,
            }

        default:
            return state
    }
}

export default sort