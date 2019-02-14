import React, { Component } from 'react'
import Column from './column/column.jsx'
import './row.scss'

export default class Row extends Component {
    render() {
        return <div className='row'>
            {this.props.children}
        </div>
    }
}