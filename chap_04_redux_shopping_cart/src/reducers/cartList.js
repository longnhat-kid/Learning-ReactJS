import * as types from '../constants/ActionTypes'
import * as keys from '../constants/KeySpecs'
import _ from 'lodash'

const default_state = localStorage.getItem(keys.DATA_KEY) ? JSON.parse(localStorage.getItem(keys.DATA_KEY)) : []

const productList = (state = default_state, action) => {
    const product = action.product
    const id = action.id
    const amount = action.amount
    switch (action.type) {
        case types.ADD_PRODUCT:
            var item = state.find(item => item.product.id === product.id)
            if (item){
                item.amount += amount
            }
            else{
                state.push({
                    product: action.product,
                    amount
                })
            }
            localStorage.setItem(keys.DATA_KEY, JSON.stringify(state))
            return [...state]
        
        case types.DELETE_PRODUCT:
            _.remove(state, (item) => item.product.id === id)
            localStorage.setItem(keys.DATA_KEY, JSON.stringify(state))
            return [...state]

        case types.UPDATE_PRODUCT:
            var item = state.find(item => item.product.id === id)
            item.amount = amount
            localStorage.setItem(keys.DATA_KEY, JSON.stringify(state))
            return [...state]

        default:
            return state
    }
}

export default productList