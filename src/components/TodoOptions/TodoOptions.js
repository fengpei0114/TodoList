import React from 'react'
import '../../scss/style.scss'
import TodoInput from './TodoInput/TodoInput.js'
import TodoList from './TodoList/TodoList.js'
import TodoOperation from './TodoOperation/TodoOperation.js'

class TodoOptions extends React.Component{
    
    constructor(){
        super();
        this.state = {
            existContent:false,
            arrowCheckStatus:false,
            content:[],
            uncompleteSum:0,
            todoSum:0,
            completeSum:0,
            completeStatus:false,
            isAll:true
        }
    }
    onChangeContent(stateName){
        this.setState({
            content:[
                ...this.state.content,
                {
                    id:this.state.todoSum+1,
                    title:stateName,
                    isComplete:false
                }
            ],
            todoSum : this.state.todoSum+1,
            uncompleteSum:this.state.uncompleteSum+1,
            existContent:true
        })
    }
    onChangeArrowCheckStatus(){
        let data = this.state.content;
        let uncompleted = this.state.uncompleteSum;
        let completed = this.state.completeSum;
        if(this.state.arrowCheckStatus){
            data.forEach((item,index)=>{
                item.isComplete = false;
                uncompleted = uncompleted + 1;
            })
            completed = 0;
        }else{
            data.forEach((item,index)=>{
                item.isComplete = true;
                completed = completed + 1;
            })
            uncompleted = 0;
        }
        this.setState({
            content:data,
            arrowCheckStatus:!this.state.arrowCheckStatus,
            uncompleteSum:uncompleted,
            completeSum:completed
        })
    }
    onChangeComplete(id){
        let data = this.state.content;
        let uncomplete = this.state.uncompleteSum;
        let complete = this.state.completeSum;
        let arrowCheck = this.state.arrowCheckStatus;
        data.forEach((item,index) => {
            if(item.id == id){
                if(item.isComplete){
                    uncomplete = uncomplete + 1;
                    complete = complete - 1; 
                }else{
                    uncomplete = uncomplete - 1;
                    complete = complete + 1;
                }
                item.isComplete = !item.isComplete;    
            }
        })
        arrowCheck = uncomplete == 0 ? true : false;
        this.setState({
            content:data,
            uncompleteSum:uncomplete,
            completeSum:complete,
            arrowCheckStatus:arrowCheck
        })
    }
    deleteTodoList(id){
        let data = this.state.content.filter(item => item.id != id);
        let arrowCheckStatusChange = this.state.arrowCheckStatus;
        let existContentChange = this.state.existContent;

        if(data.length == 0){
            arrowCheckStatusChange = false;
            existContentChange = false;
        }
        this.setState({
            content : data,
            uncompleteSum : data.length,
            arrowCheckStatus : arrowCheckStatusChange,
            existContent : existContentChange
        })
    }
    
    deleteAllList(){
        let data = this.state.content;
        let uncompleteSumChange = this.state.uncompleteSum;
        let arrowCheckStatusChange = this.state.arrowCheckStatus;
        let existContentChange = this.state.existContent;
        data = data.filter(item => !item.isComplete);
        data.forEach((item)=>{})
        if(uncompleteSumChange == 0){
            arrowCheckStatusChange = false;
            existContentChange = false;
        }
        this.setState({
            content : data,
            uncompleteSum : uncompleteSumChange,
            arrowCheckStatus : arrowCheckStatusChange,
            existContent : existContentChange
        })
    }
    changeTodoOperation(info){
        this.setState({
            isAll:info.isAll,
            completeStatus:info.completeStatus
        })
    }

    render(){
        let listItems;
        let data = this.state.isAll ? this.state.content: 
            (this.state.completeStatus ? this.state.content.filter(item => item.isComplete) : this.state.content.filter(item => !item.isComplete));
        listItems = data.map((item,index) =>
            <TodoList 
                key={index} 
                message = {item}
                changeComplete = {id => this.onChangeComplete(id)}
                deleteTodoList = {(this.deleteTodoList.bind(this))}/>
        );
        const todoOperation = !this.state.existContent ? null : (
            <TodoOperation
                uncompleteSum = {this.state.uncompleteSum}
                completeSum = {this.state.completeSum}
                completeStatus = {this.state.completeStatus}
                existContent = {this.state.existContent}
                deleteAllList = {this.deleteAllList.bind(this)}
                changeTodoOperation = {info => this.changeTodoOperation(info)}
            />);
        return(
            <div className="todo-options">
                <TodoInput 
                    onEnterPress = {this.onChangeContent.bind(this)}
                    onChangeArrow = {this.onChangeArrowCheckStatus.bind(this)}
                    arrowCheckStatus = {this.state.arrowCheckStatus}
                    existContent = {this.state.existContent}
                />
                {listItems}
                {todoOperation}
            </div>
        )
    }
}

export default TodoOptions