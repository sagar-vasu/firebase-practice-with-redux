import React from 'react'

export default class input extends React.Component {
    render() {
        return (
            <input style={this.props.style} type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.onChange} />
        )
    }
}