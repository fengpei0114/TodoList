import React from 'react'
import '../../scss/style.scss'
import arraw_check from '../../images/arraw_check.png'
import arraw_uncheck from '../../images/arraw_uncheck.png'
import NewTodoInput from './NewTodoInput/NewTodoInput.js'

class NewTodo extends React.Component{
    constructor(props){
        super(props);
    }
    addTodoItemContent(e){

        return this.props.addTodoItemContent(e);
    }
    IsAllToggleChecked(e){
        this.props.IsAllToggleChecked();
    }
    render(){
        const img = this.props.existListItem ? (
            <img
                className = "todo-options__arrow--checkimg"
                src = {this.props.isSelectAll ? arraw_check : arraw_uncheck}
            />
            ):(
            <div
                className = "todo-options__arrow--nodata"
            ></div>);
        return(
            <div>
                <div 
                    className = "todo-options__arrow"
                    onClick = {(e)=>this.IsAllToggleChecked(e)}>
                    {img}
                </div>
                <NewTodoInput 
                    addTodoItemContent = {e => this.addTodoItemContent(e)}
                />
            </div>
        )
    }
}

export default NewTodo