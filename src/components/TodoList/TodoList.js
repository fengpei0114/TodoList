import React from 'react'
import '../../scss/style.scss'
import TodoItem from './TodoItem/TodoItem.js'
import CheckBox from './CheckBox/CheckBox.js'
import Destory from './Destory/Destory.js'

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isHover:false
        }
    };
    changeTodoItemComplete(itemId){
        this.props.changeTodoItemComplete(itemId);
    }
    deleteTodoItem(e){
        this.props.deleteTodoItem(this.props.message.id);
    }
    render(){
        return(
            <div
                className = "todo-list1" 
                onMouseEnter = {(e)=>{this.setState({isHover:true})}}
                onMouseLeave = {(e)=>{this.setState({isHover:false})}}>
                <CheckBox
                    changeTodoItemComplete = {itemId => {this.changeTodoItemComplete(itemId)}}
                    message = {this.props.message}
                />
                <TodoItem
                    message = {this.props.message}
                />
                <Destory
                    isHover = {this.state.isHover}
                    itemId = {this.props.message.id}
                    deleteTodoItem = {e => this.deleteTodoItem(e)}
                />
            </div>
        )
    }
}

export default TodoList