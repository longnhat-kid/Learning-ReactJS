import React,{Component} from 'react'
import {PropTypes} from 'prop-types'
import {connect} from 'react-redux'

import * as keys from '../constants/KeySpecs'
import * as actions from '../actions/index'

import ProductList from '../components/ProductList'
import ProductItem from '../components/ProductItem'

const mapStateToProps = state => ({
    productList: state.productList
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleAdd: (product, amount) => {
        dispatch(actions.actAddProduct(product, amount))
        dispatch(actions.actChangeNotification(keys.ADD_SUCCESS))
    }
})

const connector = connect(mapStateToProps, mapDispatchToProps)

class ProductContainer extends Component {
    render(){
        return (
            <ProductList>
                {this.props.productList.map((product,index) => 
                    <ProductItem 
                        product={product} 
                        key={"myKey" + index}
                        handleAdd = {this.props.handleAdd}
                    />
                )}
            </ProductList>
        )
    }
}

ProductContainer.PropsType = {
    productList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        available: PropTypes.bool.isRequired,
    })).isRequired
}

export default connector(ProductContainer)