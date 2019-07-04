import React from 'react'
import './todoMainPart.style.scss'
import NewTodo from '../NewTodo/NewTodo.js'
import TodoList from '../TodoList/TodoList.js'
import TodoOperationBar from '../TodoOperationBar/TodoOperationBar.js'

class TodoMainPart extends React.Component{
    
    constructor(){
        super();
        this.state = {
            existListItem:false,
            isSelectAll:false,
            content:[],
            uncompletedItemCount:0,
            todoItemUniqueId:0,
            completedItemCount:0,
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
            isSelectAll : false,
            todoItemUniqueId : this.state.todoItemUniqueId+1,
            uncompletedItemCount : this.state.uncompletedItemCount+1,
            existListItem : true
        })
    }
    IsAllToggleChecked(){
        let data = this.state.content;
        let uncompletedItemCountNew = this.state.uncompletedItemCount;
        let completedItemCountNew = this.state.completedItemCount;
        if(this.state.isSelectAll){
            data.forEach(item=>{
                item.isComplete = false;
                uncompletedItemCountNew = uncompletedItemCountNew + 1;
            })
            completedItemCountNew = 0;
        }else{
            data.forEach(item=>{
                item.isComplete = true;
                completedItemCountNew = completedItemCountNew + 1;
            })
            uncompletedItemCountNew = 0;
        }
        this.setState({
            content : data,
            isSelectAll : !this.state.isSelectAll,
            uncompletedItemCount : uncompletedItemCountNew,
            completedItemCount : completedItemCountNew
        })
    }
    changeTodoItemComplete(itemId){
        let data = this.state.content;
        let uncompletedItemCountNew;
        let completedItemCountNew;
        let isSelectAllNew;
        
        data.forEach(item=>{
            if(item.id === itemId){
                item.isComplete = item.id === itemId ? !item.isComplete : item.isComplete;
                uncompletedItemCountNew = !item.isComplete ? (this.state.uncompletedItemCount + 1) : (this.state.uncompletedItemCount - 1);
                completedItemCountNew = !item.isComplete ? (this.state.completedItemCount - 1) : (this.state.completedItemCount + 1);
                isSelectAllNew = uncompletedItemCountNew == 0 ? true : false;
            }
        })
        this.setState({
            content : data,
            uncompletedItemCount : uncompletedItemCountNew,
            completedItemCount : completedItemCountNew,
            isSelectAll : isSelectAllNew
        })
    }
    deleteTodoItem(itemId){
        const data = this.state.content.filter(item => item.id != itemId);
        const isSelectAllNew = data.length === 0 ? false : this.state.isSelectAll;
        const existListItemNew = data.length === 0 ? false : this.state.existListItem;
        const completedItemCountNew = this.state.content.find(item => item.id == itemId).isComplete ? this.state.completedItemCount - 1 :this.state.completedItemCount;
        const uncompletedItemCountNew = this.state.content.find(item => item.id == itemId).isComplete ? this.state.uncompletedItemCount : this.state.uncompletedItemCount - 1;
        this.setState({
            content : data,
            uncompletedItemCount : uncompletedItemCountNew,
            completedItemCount : completedItemCountNew,
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
            completedItemCount : 0,
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
                completedItemCount = {this.state.completedItemCount}
                hasAllButtonChecked = {this.state.hasAllButtonChecked}
                hasCompleteButtonChecked = {this.state.hasCompleteButtonChecked}
                deleteAllCompletedTodoItem = {this.deleteAllCompletedTodoItem.bind(this)}
                changeFilterOptions = {info => this.changeFilterOptions(info)}
            />);
        return(
            <div className = "todo-main-part">
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