import {combineReducers} from 'redux'
import productList from './productList'
import notification from './notification'
import cartList from './cartList'

const appReducers = combineReducers({
    productList,
    cartList,
    notification
})

export default appReducers