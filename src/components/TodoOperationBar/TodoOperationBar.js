import React from 'react'
import '../../scss/style.scss'
import TodoItemCount from '../TodoItemCount/TodoItemCount.js'
import FilterButtonBar from '../FilterButtonBar/FilterButtonBar.js'
import ClearComponent from '../ClearComponent/ClearComponent.js'

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
        const clearComplete = this.props.completedItemCount != 0 ?(
            <button className = "todo-options__clear-operation--have-content">
                clear completed
            </button>):(
            <div className = "todo-options__clear-operation--no-content">

            </div>)
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
                <ClearComponent 
                    completedItemCount = {this.props.completedItemCount}
                    deleteAllCompletedTodoItem = {() => {this.deleteAllCompletedTodoItem()}}
                />
                {/* 
                <div 
                    className = "todo-options__clear-operation"
                    onClick = {(e) => {this.deleteAllCompletedTodoItem(e)}}>
                    {clearComplete}
                </div> */}
            </div>
        )
    }
}

export default TodoOperationBar