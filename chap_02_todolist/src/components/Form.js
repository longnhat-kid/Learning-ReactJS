import React from 'react'

class Form extends React.Component {
	constructor(props) {
		super(props)
		this.handleCancelClick = this.handleCancelClick.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleCancelClick(){
		this.props.onFormCancelClick()
	}

	handleInputChange = (e) => {
		const input = e.target
		const value = input.value
		const id = this.props.task_initial.id
		const level = this.props.task_initial.level
		const content = this.props.task_initial.content
		if(input.type === 'text'){
			this.props.onFormInputChange({id,content: value, level})
		}
		else{
			this.props.onFormInputChange({id,content, level: value})	
		}
	}

	handleSubmit(e){
		const task = this.props.task_initial
		const id = task.id
		const level = task.level
		const content = task.content
		e.preventDefault()
		this.props.onFormSubmit(id, content, level)
	}

	

	render(){
		return (
			<div className="row mb-n3">
				<div className="col-lg-12">
					<form className="form-inline mt-3 float-right" method="get" onSubmit={this.handleSubmit}>
						<label htmlFor="my-input" className="mr-sm-2">Task content:</label>
						<input 
							id="my-input" 
							className="form-control mb-3 mr-sm-2" 
							type="text" name="taskContent" 
							placeholder="Task content" 
							value={this.props.task_initial.content} onChange={this.handleInputChange} 
						/>
						<label htmlFor="my-select" className="mr-sm-2">Level:</label>
						<select id="my-select" className="form-control mb-3 mr-sm-2" name='level' value={this.props.task_initial.level} onChange={this.handleInputChange}>
							<option value='Small'>Small</option>
							<option value='Medium'>Medium</option>
							<option value='High'>High</option>
						</select>
						<button className="btn btn-success mb-3" type="submit">Submit</button>
						<button className="btn btn-danger mb-3" type="button" onClick={this.handleCancelClick}>Cancel</button>
					</form>
				</div>
			</div>
		);
	}
}


export default Form;
