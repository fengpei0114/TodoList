import React from 'react'
import "./allToggle.style.scss"
import arraw_check from '../../images/arraw_check.png'
import arraw_uncheck from '../../images/arraw_uncheck.png'

class AllToggle extends React.Component{
    constructor(props){
        super(props);
    }
    IsAllToggleChecked(){
        this.props.IsAllToggleChecked();
    }
    render(){
        return(
            <img
                className = {this.props.existListItem ? "arrow--show" : "arrow--hide"}
                src = {this.props.isSelectAll ? arraw_check : arraw_uncheck}
                onClick = {()=>this.IsAllToggleChecked()}
            />
        )
    }
}

export default AllToggle