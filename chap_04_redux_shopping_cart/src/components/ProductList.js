import React from 'react'

class ProductList extends React.Component {
    render() {
        return (
            <div className="col-lg-5">
                <div className="card">
                    <div className="card-header bg-success text-white font-weight-bold">
                        List Products
                    </div>
                    <div className="card-body container">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;