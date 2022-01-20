import React from 'react'
import TaskItem from './TaskItem'

class TaskList extends React.Component {
	render(){
		return (
			<div className="row mt-4">
				<div className="card" style={{ width: '100%' }}>
					<div className="card-header bg-green--modified">
						List Task
					</div>
					<div className="card-body">
						<table className="table table-dark table-striped table-hover">
							<thead>
								<tr>
									<th>#</th>
									<th>Task</th>
									<th>Level</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{this.props.tasks.map((task,index) => <TaskItem onDeleteItem={this.props.onDelete} onEditItem={this.props.onEditItem} task={task} index={index+1} key={"myIndex"+index}/>)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}


export default TaskList;
