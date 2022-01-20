import React from 'react'
import Search from './Search'
import Sort from './Sort'

class Control extends React.Component {
	constructor(props) {
		super(props)
		this.handleClickAdd = this.handleClickAdd.bind(this)
	}

	handleClickAdd(){
		this.props.onControlClick()
	}

	render(){
		var btnEle = null
		if (this.props.isShowForm){
			btnEle = <button type="button" className="btn btn-danger btn-block" onClick={this.handleClickAdd}>Close Form</button>
		}
		else{
			btnEle = <button type="button" className="btn btn-primary btn-block" onClick={this.handleClickAdd}>Add Task</button>
		}
		return (
			<div className="row">
				<Search onSearchBtnClick = {this.props.onSearchClick}/>
				<Sort sort={this.props.sort} onSelectSort={this.props.onSort}/>
				<div className="col-lg-5">
					{btnEle}
				</div>
			</div>
		);
	}
}


export default Control;
