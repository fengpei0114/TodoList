import React from 'react'
import '../../../scss/style.scss'
import arraw_check from '../../../images/arraw_check.png'
import arraw_uncheck from '../../../images/arraw_uncheck.png'

class TodoInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content:''
        }
    }
    onEnterPress(e){
        if(e.keyCode == 13){
            this.setState({
                content:''
            })
            return this.props.onEnterPress(this.state.content);
        }
    }
    inputChange(e){
        this.setState({
            content:e.target.value
        })
    }
    changeCheck(e){
        this.props.onChangeArrow();
    }
    render(){
        const img = this.props.existContent ? (
            <img
                className = "todo-options__arrow--checkimg"
                src = {this.props.arrowCheckStatus ? arraw_check : arraw_uncheck}
            />
            ):(
            <div
                className = "todo-options__arrow--nodata"
            ></div>);
        return(
            <div>
                <div 
                    className = "todo-options__arrow"
                    onClick = {(e)=>this.changeCheck(e)}>
                    {img}
                </div>
                <input 
                    className = "todo-options__todo-input"
                    type = "text"
                    onKeyDown = {(e) => this.onEnterPress(e)}
                    onChange = {(e) => this.inputChange(e)}
                    placeholder="What needs to be done?"
                    value = {this.state.content}
                />
            </div>
        )
    }
}

export default TodoInput