import React from 'react'

class CartList extends React.Component {
    render() {
        return (
            <div className="col-lg-7">
                <div className="card">
                    <div className="card-header bg-info text-white font-weight-bold">
                        Your Cart
                    </div>        
                    <div className="card-body table-responsive">
                        <table className="table table-dark table-striped table-hover mb-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}


export default CartList;