import React from 'react'

class ProductItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 1,
        }
    }

    onAdd = (product, amount) => {
        this.props.handleAdd(product, amount)
        this.setState({amount: 1})
    }

    handleInputChange = (e) => {
        const target = e.target
        const {name, value} = target
        this.setState({[name]: +value})
    }

    render() {
        const {product} = this.props
        return (
            <div className="row pb-2 mt-4 mb-4 border-bottom">
                <div className="col-sm-4">
                    <img className="img-thumbnail img-fluid mb-2" src={product.avatar} alt={product.name} />
                    <h5><span className="badge badge-pill badge-light d-block text-danger">{product.price + 'đ'}</span></h5>
                </div>
                <div className="col-sm-5">
                    <p className="product-item__description-title font-weight-bold text-info">{product.name}</p>
                    <p className="product-item__description-body">
                        {product.description}
                    </p>
                </div>
                <div className="col-sm-3">
                    <input className="form-control mb-3" type="number" name="amount" min={1} max={100} value={this.state.amount} onChange={this.handleInputChange} />
                    {this.checkProductAvailability(product)}
                </div>
            </div>
        );
    }

    checkProductAvailability(product) {
        return product.available ? 
            <button className="btn btn-primary btn-block" type="button" onClick = {() => this.onAdd(product, this.state.amount)}>Add</button> 
            : 
            <button className="btn btn-dark btn-block" type="button" disabled>Add</button>
    }
}


export default ProductItem;