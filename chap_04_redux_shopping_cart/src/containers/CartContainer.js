import React,{Component} from 'react'
import {connect} from 'react-redux'

import * as keys from '../constants/KeySpecs'
import * as actions from '../actions/index'

import CartList from '../components/CartList'
import CartItem from '../components/CartItem'
import CartCalculator from '../components/CartCalculator'
import Notification from '../components/Notification'

const mapStateToProps = state => ({
    cartList: state.cartList,
    content: state.notification
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleDeleteProduct: (id) => {
        dispatch(actions.actDeleteProduct(id))
        dispatch(actions.actChangeNotification(keys.DELETE_SUCCESS))
    },
    handleUpdateProduct: (id, amount) => {
        dispatch(actions.actUpdateProduct(id, amount))
        dispatch(actions.actChangeNotification(keys.UPDATE_SUCCESS))
    }
})

const connector = connect(mapStateToProps, mapDispatchToProps)

class CartContainer extends Component {
    render(){
        return (
            <CartList>
                {this.props.cartList.map((item,index) => 
                    <CartItem 
                        item={item} 
                        key={index + '-' + item.amount} 
                        index={index + 1}
                        handleDeleteProduct = {this.props.handleDeleteProduct}
                        handleUpdateProduct = {this.props.handleUpdateProduct}
                    />
                )}
                <CartCalculator cartList={this.props.cartList}/>
                <Notification content={this.props.content}></Notification>
            </CartList>
        )
    }
}

export default connector(CartContainer)
