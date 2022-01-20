import './App.css'
import Header from './components/Header'
import Control from './components/Control'
import Form from './components/Form'
import TaskList from './components/TaskList'
import data from './data/data'
import {v4 as uuidv4} from 'uuid'
import _ from 'lodash'
import React from 'react'

const KEY = 'TODO'

class App extends React.Component {
	constructor(props) {
		super(props)
		const initial_state = {
			tasks: data.tasks,
			isShowForm: false,
			strSearch: '',
			sortBy: 'Default',
			sortDir: '',
			task_initial: {
				id: '',
				content: '',
				level: 'Small'
			}
		}
		if(!localStorage.getItem(KEY)){
			localStorage.setItem(KEY, JSON.stringify(initial_state))
		}
		this.state = JSON.parse(localStorage.getItem(KEY))
		this.handleChildClick = this.handleChildClick.bind(this)
		this.handleSearchClick = this.handleSearchClick.bind(this)
		this.handleSort = this.handleSort.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.handleEdit = this.handleEdit.bind(this)
	}

	handleChildClick(){
		this.setState((state) => ({
			isShowForm: !state.isShowForm,
			task_initial: {
				id: '',
				content: '',
				level: 'Small'
			}
		}))
	}

	handleSearchClick(strSearch){
		this.setState((state) => ({
			strSearch: strSearch.trim()
		}))
	}

	handleSort({sortBy,sortDir}){
		this.setState((state) => ({
			sortBy: sortBy,
			sortDir: sortDir
		}))
	}

	handleDelete(id){
		_.remove(this.state.tasks, (ele) => ele.id === id)
		this.setState(state => ({
			tasks: state.tasks
		}))
	}

	handleFormSubmit(id,taskContent,level){
		if(id){
			this.state.tasks.forEach(task => {
				if(task.id === id){
					task.content = taskContent
					task.level = level
				}
			})
		}
		else{
			const newTask = {
				id: uuidv4(),
				content: taskContent,
				level:level
			}
			this.state.tasks.push(newTask)
		}
		this.setState(state => ({
			tasks: state.tasks,
			task_initial: {
				id: '',
				content: '',
				level: 'Small'
			}
		}))
	}

	handleEdit(taskEdit){
		this.setState({
			isShowForm: true,
			task_initial: taskEdit
		})
	}

	componentDidUpdate(){
		localStorage.setItem(KEY, JSON.stringify(this.state))
	}

	handlFormInputChange = (task) => {
		this.setState({
			task_initial: task
		})
	}

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
		let {tasks,sortBy,sortDir} = this.state
		const strSearch = this.normalizeStr(this.state.strSearch)
		if(strSearch){
			tasks = tasks.filter(task => this.normalizeStr(task.content).includes(strSearch))
		}
		if(sortBy !== 'Default'){
			tasks = _.orderBy(tasks, [sortBy.toLowerCase()],[sortDir.toLowerCase()])
			if(sortBy === 'Level'){
				tasks = tasks.reverse()
			}
		}
		return (
			<div className="App">
				<div className="container">
					<Header/>
					<Control sort={{sortBy,sortDir}} onControlClick={this.handleChildClick} isShowForm={this.state.isShowForm} onSearchClick={this.handleSearchClick} onSort={this.handleSort}/>
					{this.state.isShowForm ? <Form onFormCancelClick={this.handleChildClick} onFormSubmit={this.handleFormSubmit} task_initial={this.state.task_initial} onFormInputChange={this.handlFormInputChange}/> : null}
					<TaskList onDelete={this.handleDelete} onEditItem={this.handleEdit} tasks={tasks}/>
				</div>
			</div>
		);
	}
}

export default App;
