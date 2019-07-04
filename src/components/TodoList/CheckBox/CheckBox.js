import React from 'react'
import "./checkBox.style.scss"
import choose from '../../../images/choose.png'
import unchoose from '../../../images/unchoose.png'

class CheckBox extends React.Component{
    constructor(props){
        super(props)
    }
    changeTodoItemComplete(e){
        this.props.changeTodoItemComplete(this.props.message.id);
    }

    render(){
        return(
            <img className = "todo-list__checkbox--unchecked"
                src = {this.props.message.isComplete ? choose : unchoose}
                onClick = {(e) => {this.changeTodoItemComplete(e)}}
            /> 
        )
    }
}

export default CheckBox