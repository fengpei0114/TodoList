import React from 'react'
import '../../scss/style.scss'
// import NewTodo from './NewTodo/newTodo.js'
import NewTodo from '../NewTodo/NewTodo.js'
import TodoList from './TodoList/TodoList.js'
import TodoOperationBar from './TodoOperationBar/TodoOperationBar.js'

class TodoMainPart extends React.Component{
    
    constructor(){
        super();
        this.state = {
            existListItem:false,
            isSelectAll:false,
            content:[],
            uncompletedItemCount:0,
            todoItemUniqueId:0,
            completedItemSum:0,
            hasCompleteButtonChecked:false,
            hasAllButtonChecked:true
        }
    }
    addTodoItemContent(todoItem){
        this.setState({
            content:[
                ...this.state.content,
                {
                    id:this.state.todoItemUniqueId+1,
                    title:todoItem,
                    isComplete:false
                }
            ],
            todoItemUniqueId : this.state.todoItemUniqueId+1,
            uncompletedItemCount : this.state.uncompletedItemCount+1,
            existListItem : true
        })
    }
    IsAllToggleChecked(){
        let data = this.state.content;
        let uncompleted = this.state.uncompletedItemCount;
        let completed = this.state.completedItemSum;
        if(this.state.isSelectAll){
            data.forEach(item=>{
                item.isComplete = false;
                uncompleted = uncompleted + 1;
            })
            completed = 0;
        }else{
            data.forEach(item=>{
                item.isComplete = true;
                completed = completed + 1;
            })
            uncompleted = 0;
        }
        this.setState({
            content : data,
            isSelectAll : !this.state.isSelectAll,
            uncompletedItemCount : uncompleted,
            completedItemSum : completed
        })
    }
    changeTodoItemComplete(itemId){
        let data = this.state.content;
        let uncompletedItemCountNew = this.state.content.uncompletedItemCount;
        let completedItemSumNew;
        let isSelectAllNew;
        data.forEach(item=>{
            if(item.id === itemId){
                item.isComplete = item.id === itemId ? !item.isComplete : item.isComplete;
                uncompletedItemCountNew = !item.isComplete ? (this.state.uncompletedItemCount + 1) : (this.state.uncompletedItemCount - 1);
                completedItemSumNew = !item.isComplete ? (this.state.completedItemSum - 1) : (this.state.completedItemSum + 1);
                isSelectAllNew = uncompletedItemCountNew == 0 ? true : false;
            }
        })
        console.log(uncompletedItemCountNew);
        this.setState({
            content : data,
            uncompletedItemCount : uncompletedItemCountNew,
            completedItemSum : completedItemSumNew,
            isSelectAll : isSelectAllNew
        })
    }
    deleteTodoItem(itemId){
        const data = this.state.content.filter(item => item.id != itemId);
        const isSelectAllNew = data.length === 0 ? false : this.state.isSelectAll;
        const existListItemNew = data.length === 0 ? false : this.state.existListItem;
        this.setState({
            content : data,
            uncompletedItemCount : data.length,
            isSelectAll : isSelectAllNew,
            existListItem : existListItemNew
        })
    }
    
    deleteAllCompletedTodoItem(){
        const data = this.state.content.filter(item => !item.isComplete);
        const uncompletedItemCountNew = data.length;
        const isSelectAllNew = data.length === 0 ? false : this.state.isSelectAll;
        const existListItemNew = data.length === 0 ? false : this.state.existListItem;
        this.setState({
            content : data,
            uncompleteSum : uncompletedItemCountNew,
            isSelectAll : isSelectAllNew,
            existListItem : existListItemNew
        })
    }
    changeFilterOptions(checkdButtonInfo){
        this.setState({
            hasAllButtonChecked : checkdButtonInfo.hasAllButtonChecked,
            hasCompleteButtonChecked : checkdButtonInfo.hasCompleteButtonChecked
        })
    }

    render(){
        let listItems;
        let data = this.state.hasAllButtonChecked ? this.state.content : 
            (this.state.hasCompleteButtonChecked ? this.state.content.filter(item => item.isComplete) : this.state.content.filter(item => !item.isComplete));
        listItems = data.map((item,index) =>
            <TodoList 
                key={index} 
                message = {item}
                changeTodoItemComplete = {itemId => this.changeTodoItemComplete(itemId)}
                deleteTodoItem = {itemId => this.deleteTodoItem(itemId)}/>
        );
        const todoOperation = !this.state.existListItem ? null : (
            <TodoOperationBar
                uncompletedItemCount = {this.state.uncompletedItemCount}
                completedItemSum = {this.state.completedItemSum}
                deleteAllCompletedTodoItem = {this.deleteAllCompletedTodoItem.bind(this)}
                changeFilterOptions = {info => this.changeFilterOptions(info)}
            />);
        return(
            <div className="todo-options">
                <NewTodo 
                    addTodoItemContent = {this.addTodoItemContent.bind(this)}
                    IsAllToggleChecked = {this.IsAllToggleChecked.bind(this)}
                    isSelectAll = {this.state.isSelectAll}
                    existListItem = {this.state.existListItem}
                />
                {listItems}
                {todoOperation}
            </div>
        )
    }
}

export default TodoMainPart