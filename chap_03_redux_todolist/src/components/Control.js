import React from 'react'
import Search from './Search'
import Sort from './Sort'
import * as actions from '../actions/index'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
	isShowForm: state.showForm.isShowForm
})

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleButtonClick: () => dispatch(actions.actToggleForm()),
	}
}

const connector = connect(mapStateToProps, mapDispatchToProps)

class Control extends React.Component {

	onButtonClick = () => {
		this.props.handleButtonClick()
	}

	render(){
		var btnEle = null
		if (this.props.isShowForm){
			btnEle = <button type="button" className="btn btn-danger btn-block" onClick={this.onButtonClick}>Close Form</button>
		}
		else{
			btnEle = <button type="button" className="btn btn-primary btn-block" onClick={this.onButtonClick}>Add Task</button>
		}
		return (
			<div className="row">
				<Search/>
				<Sort sort={this.props.sort} onSelectSort={this.props.onSort}/>
				<div className="col-lg-5">
					{btnEle}
				</div>
			</div>
		);
	}
}


export default connector(Control);
