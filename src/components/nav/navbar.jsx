import React, { Component } from 'react'
import './navbar.scss'
import logo from './logo.svg'

export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <img src={logo} alt='Logo do GitHub' className='navbar__logo' />
                <p className='navbar__title'>
                    <span className='navbar__title_bolder'>GitHub</span>
                    profiles
                </p>
            </nav>
        )
    }
}