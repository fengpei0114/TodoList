import React from 'react'
import '../../../../scss/style.scss'

class AllButton extends React.Component{
    render(){
        return(
            <button 
                className = {this.props.allCheck ? "todo-options__operation--allCheck" : "todo-options__operation--allUncheck"}>
                All
            </button>
        )
    }
}

export default AllButton