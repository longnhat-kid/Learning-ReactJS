import React from 'react'

class CartCalculator extends React.Component {
    render() {
        var count = this.props.cartList.reduce((cal,item) => cal += item.amount, 0)
        var totalPrice = this.props.cartList.reduce((cal,item) => cal += item.amount*item.product.price, 0)
        return (
            <tr>
                <td colSpan={4}>There are <span className="font-weight-bold text-info">{count}</span> item(s) in your shopping cart.</td>
                <td colSpan={2}><span className="font-weight-bold text-danger">{totalPrice+'đ'}</span></td>
            </tr>
        );
    }
}


export default CartCalculator;