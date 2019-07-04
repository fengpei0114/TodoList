import React from 'react'
import '../../scss/style.scss'

class ClearComponent extends React.Component{
    constructor(props){
        super(props)
    }
    deleteAllCompletedTodoItem(){
        this.props.deleteAllCompletedTodoItem();
    }
    render(){
        return(
            <button 
                className = {this.props.completedItemCount != 0 ? "clear-completed--show":"clear-completed--hide"}
                onClick = {()=>this.deleteAllCompletedTodoItem()}>
                clear completed
            </button>
        )
    }
}

export default ClearComponent