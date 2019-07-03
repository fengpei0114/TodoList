import React from 'react'
import '../../scss/style.scss'
import TodoTitle from '../TodoTitle/TodoTitle.js.js'
import TodoOptions from '../TodoOptions/TodoOptions.js'
import Info from '../Info/Info.js'

class TodoListDemo extends React.Component{
    render(){
        return(
            <div className = "comment">
                <TodoTitle />
                <TodoOptions />
                <Info />
            </div>
        )
    }
}

export default TodoListDemo