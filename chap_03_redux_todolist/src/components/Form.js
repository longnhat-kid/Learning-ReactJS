import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'

const mapStateToProps = state => ({
	isShowForm: state.showForm.isShowForm,
	task_initial: state.showForm.task_initial
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	handleCancelClick: () => dispatch(actions.actCloseForm()),
	handleFormSubmit: (task) => dispatch(actions.actSubmitForm(task))
})

const connector = connect(mapStateToProps, mapDispatchToProps)

class Form extends React.Component {
	constructor(props) {
		super(props)
		this.state = this.props.task_initial
	}

	onCancelClick = () => {
		this.props.handleCancelClick()
	}

	handleInputChange = (e) => {
		const input = e.target
		const value = input.value
		if(input.type === 'text'){
			this.setState({
				content: value
			})
		}
		else{
			this.setState({
				level: value
			})	
		}
	}

	onFormSubmit = (e) => {
		const task = this.state
		e.preventDefault()
		this.props.handleFormSubmit(task)
		this.setState(this.props.task_initial)
	}

	componentDidUpdate(prevProps){
		if(this.props.task_initial.id !== prevProps.task_initial.id){
			this.setState(this.props.task_initial)
		}
	}

	render(){
		if(!this.props.isShowForm) return null
		const content = this.state.content
		const level = this.state.level
		return (
			<div className="row mb-n3">
				<div className="col-lg-12">
					<form className="form-inline mt-3 float-right" method="get" onSubmit={this.onFormSubmit}>
						<label htmlFor="my-input" className="mr-sm-2">Task content:</label>
						<input 
							id="my-input" 
							className="form-control mb-3 mr-sm-2" 
							type="text" name="taskContent" 
							placeholder="Task content" 
							value={content} onChange={this.handleInputChange} 
						/>
						<label htmlFor="my-select" className="mr-sm-2">Level:</label>
						<select id="my-select" className="form-control mb-3 mr-sm-2" name='level' value={level} onChange={this.handleInputChange}>
							<option value='Small'>Small</option>
							<option value='Medium'>Medium</option>
							<option value='High'>High</option>
						</select>
						<button className="btn btn-success mb-3" type="submit">Submit</button>
						<button className="btn btn-danger mb-3" type="button" onClick={this.onCancelClick}>Cancel</button>
					</form>
				</div>
			</div>
		);
	}
}


export default connector(Form);
