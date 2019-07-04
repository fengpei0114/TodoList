import React from 'react'
import '../../scss/style.scss'

class FilterButtonBar extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("isSelectAll : " + this.props.isSelectAll);
        console.log("hasCompleteButtonChecked : " + this.props.hasCompleteButtonChecked);
    }

    onClickAllButton(){
        this.props.changeFilterOptions({
            hasAllButtonChecked:true,
            hasCompleteButtonChecked:false
        });
    }
    onClickActiveButton(){
        this.props.changeFilterOptions({
            hasAllButtonChecked:false,
            hasCompleteButtonChecked:false
        });
    }
    onClickCompleteCheck(){
        this.props.changeFilterOptions({
            hasAllButtonChecked:false,
            hasCompleteButtonChecked:true
        })
    }
    render(){
        return(
            <div className = "filter-button-bar">
                <button 
                    className = {this.props.hasAllButtonChecked ? "filter-button-bar__button--checked" : "filter-button-bar__button--unchecked"}
                    onClick = {() => {this.onClickAllButton()}}>
                        All
                </button>
                <button 
                    className = {this.props.hasAllButtonChecked || this.props.hasCompleteButtonChecked ? "filter-button-bar__button--unchecked" : "filter-button-bar__button--checked"}
                    onClick = {(e) => {this.onClickActiveButton()}}>
                        Active
                </button>
                <button 
                    className = {this.props.hasAllButtonChecked || !this.props.hasCompleteButtonChecked ? "filter-button-bar__button--unchecked" : "filter-button-bar__button--checked"}
                    onClick = {(e) => {this.onClickCompleteCheck()}}>
                        Completed
                </button>
            </div>
        )
    }
}

export default FilterButtonBar