import React, { Component } from 'react'

export default class Todo extends Component {
    
    render() {
        return (
            <li>{this.props.name} <button onClick={this.props.done}>Done</button></li>
        )
    }
}