import React, { Component } from 'react'
import './label.scss'
import search from './search.svg'

export default class Input extends Component {
    render() {
        return (
            <label htmlFor='searchInput'>
                <img src={search} alt='Search icon'/>
                {this.props.children}
            </label>
        )
    }
}