import React from 'react'
import * as actions from '../actions/index'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    tasks: state.tasks
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleEditClick: (task) => dispatch(actions.actEditTask(task)),
    handleDeleteItem: (id) => dispatch(actions.actDelete(id))
})

const connector = connect(mapStateToProps, mapDispatchToProps)

class TaskItem extends React.Component {

    processTaskLevel(level){
        switch (level) {
            case 'Small':
                return <td><span className="badge badge-pill badge-secondary">{this.props.task.level}</span></td>
            case 'Medium':
                return <td><span className="badge badge-pill badge-info">{this.props.task.level}</span></td>
            case 'High':
                return <td><span className="badge badge-pill badge-danger">{this.props.task.level}</span></td>
            default:
                break;
        }
    }

    onEditItem = (task) => {
        this.props.handleEditClick(task)
    }

    onDeleteItem = (id) => {
        this.props.handleDeleteItem(id)
    }

	render(){
		return (
			<tr>
                <td>{this.props.index}</td>
                <td>{this.props.task.content}</td>
                {this.processTaskLevel(this.props.task.level)}
                <td>
                    <div className="btn-group" role="group" aria-label="Button group">
                        <button className="btn btn-warning btn-sm" type="button" onClick={() => this.onEditItem(this.props.task)}>Edit</button>
                        <button className="btn btn-danger btn-sm" type="button" onClick = {() => this.onDeleteItem(this.props.task.id)}>Delete</button>
                    </div>
                </td>
			</tr>
		);
	}
}


export default connector(TaskItem);
