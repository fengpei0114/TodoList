import React from 'react'
import '../../scss/style.scss'
import arraw_check from '../../images/arraw_check.png'
import arraw_uncheck from '../../images/arraw_uncheck.png'
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
            <div  className="new-todo">
                {/* <div 
                    className = "todo-options__arrow"
                    IsAllToggleChecked = {()=>this.IsAllToggleChecked()}>
                    {img}
                </div> */}
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