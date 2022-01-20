import React from 'react'
import * as actions from '../actions/index'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
	sort: state.sort
})

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleSort: (sortType) => dispatch(actions.actSort(sortType)),
	}
}

const connector = connect(mapStateToProps, mapDispatchToProps)

class Sort extends React.Component {

    onSort = (item) => {
        const sortType = item.innerText.split('-')
        const sortBy = sortType[0]
        const sortDir = sortType[1]
        this.props.handleSort({sortBy,sortDir})
    }

	render(){
        const sortType = this.props.sort.sortBy === 'Default' ? 'Default' : this.props.sort.sortBy + '-' + this.props.sort.sortDir
		return (
			<div className="col-lg-3 mb-3--modified">
                <div className="dropdown d-flex align-items-center">
                    <span><label htmlFor="dropdown" className="mr-sm-2 mb-n2">Sort by:</label></span>
                    <button id="my-dropdown" className="btn btn-outline-info dropdown-toggle" data-toggle="dropdown">{sortType}</button>
                    <ul className="dropdown-menu" aria-labelledby="my-dropdown" style={{cursor: "pointer"}}>
                    <li className="dropdown-item" onClick={(e) => this.onSort(e.target)}>Default</li>
                        <li className="dropdown-item" onClick={(e) => this.onSort(e.target)}>Content-ASC</li>
                        <li className="dropdown-item" onClick={(e) => this.onSort(e.target)}>Content-DESC</li>
                        <hr className="mt-2 mb-2"/>
                        <li className="dropdown-item" onClick={(e) => this.onSort(e.target)}>Level-ASC</li>
                        <li className="dropdown-item" onClick={(e) => this.onSort(e.target)}>Level-DESC</li>
                    </ul>
                </div>
			</div>
		);
	}
}


export default connector(Sort);
