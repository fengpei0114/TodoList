import React from 'react'
import '../../../scss/style.scss'

class Destory extends React.Component{
    constructor(props){
        super(props)
    }

    deleteTodoItem(){
        this.props.deleteTodoItem(this.props.itemId);
    }

    render(){
        return(
        <button 
            className = {this.props.isHover ? "todo-list1__destory--hover":"todo-list1__destory--unhover"}
            onClick = {() => {this.deleteTodoItem()}}>X
        </button>)
    }
}

export default Destory