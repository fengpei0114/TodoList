import React from 'react'
import './todoOperationBar.style.scss'
import TodoItemCount from '../TodoItemCount/TodoItemCount.js'
import FilterButtonBar from '../FilterButtonBar/FilterButtonBar.js'
import ClearCompleted from '../ClearCompleted/ClearCompleted.js'

class TodoOperationBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chooseClearComplete:false,
            allChecked:true,
            activeChecked:false,
            completeChecked:false
        }
    }
    deleteAllCompletedTodoItem(){
        this.props.deleteAllCompletedTodoItem();
    }
    changeFilterOptions(info){
        this.props.changeFilterOptions(info);
    }
    render(){
        return (
            <div className = "todo-operationbar">
                <TodoItemCount
                    uncompletedItemCount = {this.props.uncompletedItemCount}
                />
                <FilterButtonBar
                    hasAllButtonChecked = {this.props.hasAllButtonChecked}
                    hasCompleteButtonChecked = {this.props.hasCompleteButtonChecked}
                    changeFilterOptions = {info => {this.changeFilterOptions(info)}}
                />
                <ClearCompleted 
                    completedItemCount = {this.props.completedItemCount}
                    deleteAllCompletedTodoItem = {() => {this.deleteAllCompletedTodoItem()}}
                />
            </div>
        )
    }
}

export default TodoOperationBar