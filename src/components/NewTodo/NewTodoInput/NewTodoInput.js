import React from 'react'
import './newTodoInput.style.scss'

class NewTodoInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content:''
        }
    }
    inputChange(e){
        this.setState({
            content:e.target.value
        })
    }
    addTodoItemContent(e){
        if(e.keyCode == 13){
            this.setState({
                content:''
            })
            return this.props.addTodoItemContent(this.state.content);
        }
    }
    render(){
        return (<input 
            className = "new-todo__new-todo-input"
            type = "text"
            onKeyDown = {(e) => this.addTodoItemContent(e)}
            onChange = {(e) => this.inputChange(e)}
            placeholder="What needs to be done?"
            value = {this.state.content}
        />)
    }
}

export default NewTodoInput