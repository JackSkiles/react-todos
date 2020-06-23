import React, { Component } from 'react'

export default class Done extends Component {
    
    render() {
        return (
            <li>{this.props.name}
            <button onClick={this.props.removed}>Remove</button></li>
        )
    }
}