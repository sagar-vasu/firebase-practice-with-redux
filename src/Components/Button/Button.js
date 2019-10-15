import React from 'react'

export default class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick} style={this.props.style}>
                {this.props.children}
            </button>
        )
    }
}