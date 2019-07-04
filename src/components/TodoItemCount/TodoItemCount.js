import React from 'react'
import '../../scss/style.scss'

class TodoItemCount extends React.Component{

    render(){
        return(
            <div className = "todo-item-count">
                {this.props.uncompletedItemCount} item left
            </div>
        )
    }
}

export default TodoItemCount