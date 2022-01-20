import './App.css'
import Header from './components/Header'
import Control from './components/Control'
import Form from './components/Form'
import TaskList from './components/TaskList'
import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
	isShowForm: state.showForm.isShowForm
})

const connector = connect(mapStateToProps)

class App extends React.Component {
	render(){
		return (
			<div className="App">
				<div className="container">
					<Header/>
					<Control/>
					<Form/>
					<TaskList/>
				</div>
			</div>
		);
	}
}

export default connector(App);
