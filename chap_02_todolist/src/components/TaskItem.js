import React from 'react'

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

	render(){
		return (
			<tr>
                <td>{this.props.index}</td>
                <td>{this.props.task.content}</td>
                {this.processTaskLevel(this.props.task.level)}
                <td>
                    <div className="btn-group" role="group" aria-label="Button group">
                        <button className="btn btn-warning btn-sm" type="button" onClick={() => this.props.onEditItem(this.props.task)}>Edit</button>
                        <button className="btn btn-danger btn-sm" type="button" onClick = {() => this.props.onDeleteItem(this.props.task.id)}>Delete</button>
                    </div>
                </td>
			</tr>
		);
	}
}


export default TaskItem;
