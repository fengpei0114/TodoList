import React from 'react'
import '../../../scss/style.scss'
import choose from '../../../images/choose.png'
import unchoose from '../../../images/unchoose.png'

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isHover:false
        }
    };
    changeTodoItemComplete(e){
        this.props.changeTodoItemComplete(this.props.message.id);
    }
    deleteTodoItem(e){
        this.props.deleteTodoItem(this.props.message.id);
    }
    render(){
        const deleteContent = this.state.isHover?(
            <button 
                className = "todo-options__delete--hover"
                onClick = {(e) => {this.deleteTodoItem(e)}}>X
            </button>
        ):(
            <div className = "todo-options__delete--unhover">
            </div>
        )
        return(
            <div onMouseEnter = {(e)=>{this.setState({isHover:true})}}
                onMouseLeave = {(e)=>{this.setState({isHover:false})}}>
                <div 
                    className = "todo-options__checkbox"
                    onClick = {(e) => {this.changeTodoItemComplete(e)}}>
                    <img className = {this.props.message.isComplete ? "todo-options__checkbox--unchecked" : "todo-options__checkbox--unchecked"}
                        src = {this.props.message.isComplete ? choose : unchoose}
                    /> 
                </div>
                <div className = "todo-options__todo-list">
                    <div className = {this.props.message.isComplete?"todo-options__todo-list--complete":"todo-options__todo-list--uncomplete"}>
                        {this.props.message.title}
                    </div>
                </div>
                <div 
                    className = "todo-options__delete">
                    {deleteContent}
                </div>
            </div>
        )
    }
}

export default TodoList