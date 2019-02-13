import React, { Component } from 'react'
import './input.scss'
import Label from './../label/label.jsx'

export default class Input extends Component {
    constructor(props) {
        super(props)
        this.value = ``
    }

    handleOnChange = (ev) => {
        ev.preventDefault()
        this.value = ev.target.value 
        console.log(this.value)
    }

    render() {
        return (
            <Label>
                <input
                    id='searchInput'
                    type='text'
                    placeholder='Filter by name'
                    className='search container'
                    onChange={this.handleOnChange} />
            </Label>
        )
    }
}