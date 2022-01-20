import * as types from '../constants/ActionTypes'
import * as keys from '../constants/KeySpec'
import {v4 as uuidv4} from 'uuid'
import _ from 'lodash'



const default_state = []

let getState = () => {
    if(!localStorage.getItem(keys.KEY_LOCAL_STORAGE)){
        localStorage.setItem(keys.KEY_LOCAL_STORAGE, JSON.stringify(default_state))
        return default_state
    }
    else{
        return JSON.parse(localStorage.getItem(keys.KEY_LOCAL_STORAGE))
    }
}


const tasks = (state = getState(), action) => {
    let newTasks = [...state]
    switch(action.type){
        case types.SUBMIT_FORM:
            let {id, content, level} = action.task 
            if(id){
                newTasks.forEach(task => {
                    if(task.id === id){
                        task.content = content
                        task.level = level
                    }
                })
            }
            else{
                const newTask = {
                    id: uuidv4(),
                    content,
                    level
                }
                newTasks.push(newTask)
            }
            localStorage.setItem(keys.KEY_LOCAL_STORAGE, JSON.stringify(newTasks))
            return newTasks

        case types.DELETE:
            _.remove(newTasks, (ele) => ele.id === action.id)
            localStorage.setItem(keys.KEY_LOCAL_STORAGE, JSON.stringify(newTasks))
            return newTasks

        default:
            return state 
    }
}

export default tasks