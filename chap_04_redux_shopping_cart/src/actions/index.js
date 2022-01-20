import * as types from '../constants/ActionTypes'

export const actAddProduct = (product, amount) => ({
    type: types.ADD_PRODUCT,
    product,
    amount
})

export const actDeleteProduct = (id) => ({
    type: types.DELETE_PRODUCT,
    id
})

export const actUpdateProduct = (id, amount) => ({
    type: types.UPDATE_PRODUCT,
    id,
    amount
})

export const actChangeNotification = (content) => ({
    type: types.CHANGE_NOTIFICATION,
    content
})