import React, { Component } from 'react'
import './column.scss'

export default class Column extends Component {
    render() {
        return <div className='column'>{this.props.children}</div>
    }
}