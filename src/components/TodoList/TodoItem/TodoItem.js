import React from 'react'
import './todoItem.style.scss'

class TodoItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = {this.props.message.isComplete?"todo-list__todo-item--complete":"todo-list__todo-item--uncomplete"}>
                {this.props.message.title}
            </div>
        )
    }
}

export default TodoItem
