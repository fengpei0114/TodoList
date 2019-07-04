import React from 'react'
import '../../../scss/style.scss'
import AllButton from './AllButton/AllButton.js'

class TodoOperationBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chooseClearComplete:false,
            allChecked:true,
            activeChecked:false,
            completeChecked:false
        }
    }
    deleteAllCompletedTodoItem(e){
        this.props.deleteAllCompletedTodoItem();
    }
    onChangeCompleteStatus(e){
        this.props.onChangeCompleteStatus(e);
    }
    onClickAllButton(){
        const info = {
            hasAllButtonChecked:true,
            hasCompleteButtonChecked:false
        }
        this.setState({
            allChecked:true,
            activeChecked:false,
            completeChecked:false
        })
        this.props.changeFilterOptions(info);
    }
    onClickActiveButton(){
        const info = {
            hasAllButtonChecked:false,
            hasCompleteButtonChecked:false
        }
        this.setState({
            allChecked:false,
            activeChecked:true,
            completeChecked:false
        })
        this.props.changeFilterOptions(info);
    }
    onClickCompleteCheck(){
        const info = {
            hasAllButtonChecked:false,
            hasCompleteButtonChecked:true
        }
        this.setState({
            allChecked:false,
            activeChecked:false,
            completeChecked:true
        })
        this.props.changeFilterOptions(info);
    }
    render(){
        const clearComplete = this.props.completedItemCount != 0 ?(
            <button className = "todo-options__clear-operation--have-content">
                clear completed
            </button>):(
            <div className = "todo-options__clear-operation--no-content">

            </div>)
        return (
            <div>
                <div className = "todo-options__uncomplete">
                    {this.props.uncompletedItemCount} item left
                </div>
                <div className = "todo-options__operation">
                        <button 
                            className = {this.state.allChecked ? "todo-options__operation--allCheck" : "todo-options__operation--allUncheck"}
                            onClick = {() => {this.onClickAllButton()}}>
                            All
                        </button>
                        <button 
                            className = {this.state.activeChecked ? "todo-options__operation--activeCheck" : "todo-options__operation--activeUncheck"}
                            onClick = {(e) => {this.onClickActiveButton()}}>
                            Active
                        </button>
                        <button 
                            className = {this.state.completeChecked ? "todo-options__operation--completedCheck" : "todo-options__operation--completedUncheck"}
                            onClick = {(e) => {this.onClickCompleteCheck()}}>
                            Completed
                        </button>
                </div>
                <div 
                    className = "todo-options__clear-operation"
                    onClick = {(e) => {this.deleteAllCompletedTodoItem(e)}}>
                    {clearComplete}
                </div>
            </div>
        )
    }
}

export default TodoOperationBar