import React from 'react'
import '../../../scss/style.scss'
import AllButton from './AllButton/AllButton.js'

class TodoOperation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chooseClearComplete:false,
            allCheck:true,
            activeCheck:false,
            completeCheck:false
        }
    }
    deleteAllList(e){
        this.props.deleteAllList();
    }
    onChangeCompleteStatus(e){
        this.props.onChangeCompleteStatus(e);
    }
    onClickAllButton(){
        const info = {
            isAll:true,
            completeStatus:false
        }
        this.setState({
            allCheck:true,
            activeCheck:false,
            completeCheck:false
        })
        this.props.changeTodoOperation(info);
    }
    onClickActiveButton(){
        const info = {
            isAll:false,
            completeStatus:false
        }
        this.setState({
            allCheck:false,
            activeCheck:true,
            completeCheck:false
        })
        this.props.changeTodoOperation(info);
    }
    onClickCompleteCheck(){
        const info = {
            isAll:false,
            completeStatus:true
        }
        this.setState({
            allCheck:false,
            activeCheck:false,
            completeCheck:true
        })
        this.props.changeTodoOperation(info);
    }
    render(){
        const clearComplete = this.props.completeSum != 0 ?(
            <button className = "todo-options__clear-operation--have-content">
                clear completed
            </button>):(
            <div className = "todo-options__clear-operation--no-content">

            </div>)
        return (
            <div>
                <div className = "todo-options__uncomplete">
                    {this.props.uncompleteSum} item left
                </div>
                <div className = "todo-options__operation">
                        <button 
                            className = {this.state.allCheck ? "todo-options__operation--allCheck" : "todo-options__operation--allUncheck"}
                            onClick = {() => {this.onClickAllButton()}}>
                            All
                        </button>
                        <button 
                            className = {this.state.activeCheck ? "todo-options__operation--activeCheck" : "todo-options__operation--activeUncheck"}
                            onClick = {(e) => {this.onClickActiveButton()}}>
                            Active
                        </button>
                        <button 
                            className = {this.state.completeCheck ? "todo-options__operation--completedCheck" : "todo-options__operation--completedUncheck"}
                            onClick = {(e) => {this.onClickCompleteCheck()}}>
                            Completed
                        </button>
                </div>
                <div 
                    className = "todo-options__clear-operation"
                    onClick = {(e) => {this.deleteAllList(e)}}>
                    {clearComplete}
                </div>
            </div>
        )
    }
}

export default TodoOperation