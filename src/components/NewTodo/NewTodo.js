import React from 'react'
import './newTodo.style.scss'
import NewTodoInput from './NewTodoInput/NewTodoInput.js'
import AllToggle from '../AllToggle/AllToggle.js'

class NewTodo extends React.Component{
    constructor(props){
        super(props);
    }
    addTodoItemContent(e){
        return this.props.addTodoItemContent(e);
    }
    IsAllToggleChecked(){
        this.props.IsAllToggleChecked();
    }
    render(){
        return(
            <div  className="new-todo">
                <AllToggle
                    existListItem = {this.props.existListItem}
                    isSelectAll = {this.props.isSelectAll}
                    IsAllToggleChecked = {()=>{this.IsAllToggleChecked()}}
                />
                <NewTodoInput 
                    addTodoItemContent = {e => this.addTodoItemContent(e)}
                />
            </div>
        )
    }
}

export default NewTodo