import React from 'react'

class CartItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 0
        }
    }
    
    handleInputChange = (e) => {
        this.setState({amount: e.target.value})
    }

    render() {
        const {item, index} = this.props
        const {product} = item
        const amount = this.state.amount ? this.state.amount : item.amount
        return (
            <tr>
                <td>{index}</td>
                <td>{product.name}</td>
                <td>{product.price +'đ'}</td>
                <td>
                    <input className="form-control" type="number" name="quantity" value = {amount} min={1} max={100} onChange = {this.handleInputChange} />
                </td>
                <td>
                    <div className="font-weight-bold">{String(parseInt(product.price)*amount) +'đ'}</div>
                </td>
                <td>
                    <div className="btn-group" role="group" aria-label="Button group">
                        <button className="btn btn-primary btn-sm" type="button" onClick = {() => this.props.handleUpdateProduct(product.id, parseInt(this.state.amount))}>Update</button>
                        <button className="btn btn-danger btn-sm" type="button" onClick = {() => this.props.handleDeleteProduct(product.id)}>Delete</button>
                    </div>
                </td>
            </tr>
        );
    }
}


export default CartItem;