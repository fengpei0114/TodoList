import React from 'react'
import '../../scss/style.scss'
import TodosTitle from '../TodosTitle/TodosTitle.js'
import TodoOptions from '../TodoOptions/TodoOptions.js'
import StatementText from '../StatementText/StatementText.js'

class Comment extends React.Component{
    render(){
        return(
            <div className = "comment">
                <TodosTitle />
                <TodoOptions />
                <StatementText />
            </div>
        )
    }
}

export default Comment