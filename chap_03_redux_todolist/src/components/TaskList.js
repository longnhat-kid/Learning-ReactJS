import React from 'react'
import TaskItem from './TaskItem'
import {connect} from 'react-redux'
import _ from 'lodash'

const mapStatetoProps = state => ({
	tasks: state.tasks,
	strSearch: state.strSearch,
	sortType: state.sort
})

const connector = connect(mapStatetoProps)

class TaskList extends React.Component {
	normalizeStr(str) {
		str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
		str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
		str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
		str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
		str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
		str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
		str = str.replace(/đ/g, "d");
		str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
		str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
		str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
		str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
		str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
		str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
		str = str.replace(/Đ/g, "D");
		return str.toLowerCase();
	}

	render(){
		let {tasks, sortType} = this.props
		let {sortBy, sortDir} = sortType
		const strSearch = this.normalizeStr(this.props.strSearch)
		if(strSearch){
			tasks = tasks.filter((task) => this.normalizeStr(task.content).includes(strSearch))
		}
		if(sortBy !== 'Default'){
			tasks = _.orderBy(tasks, [sortBy.toLowerCase()],[sortDir.toLowerCase()])
			if(sortBy === 'Level'){
				tasks = tasks.reverse()
			}
		}
		const items = tasks.map((task,index) => <TaskItem task={task} index={index+1} key={"myIndex"+index}/>)
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
								{items}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default connector(TaskList);
