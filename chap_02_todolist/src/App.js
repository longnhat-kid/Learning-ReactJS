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
		str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "a");
		str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "e");
		str = str.replace(/??|??|???|???|??/g, "i");
		str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "o");
		str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "u");
		str = str.replace(/???|??|???|???|???/g, "y");
		str = str.replace(/??/g, "d");
		str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "A");
		str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "E");
		str = str.replace(/??|??|???|???|??/g, "I");
		str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "O");
		str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "U");
		str = str.replace(/???|??|???|???|???/g, "Y");
		str = str.replace(/??/g, "D");
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
