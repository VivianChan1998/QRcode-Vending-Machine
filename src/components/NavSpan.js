import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class NavSpan extends Component {
    constructor(props){
        super(props);
        this.state={
            directory: '/' + this.props.destination,
            text: this.props.destination
        }
    }
    render() {
        return(
            <span>
                <NavLink to={this.state.directory}>
                    {this.state.text}
                </NavLink>
            </span>
        )
    }
}

export default NavSpan;