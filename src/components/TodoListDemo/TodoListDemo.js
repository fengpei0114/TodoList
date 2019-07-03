import React from 'react'
import '../../scss/style.scss'
import TodoTitle from '../TodoTitle/TodoTitle.js'
import TodoMainPart from '../TodoMainPart/TodoMainPart.js'
import Info from '../Info/Info.js'

class TodoListDemo extends React.Component{
    render(){
        return(
            <div className = "comment">
                <TodoTitle />
                <TodoMainPart />
                <Info />
            </div>
        )
    }
}

export default TodoListDemo