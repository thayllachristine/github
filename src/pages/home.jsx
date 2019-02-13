import React, { Component } from 'react'
import './home.scss'

import Navbar from './../components/nav/navbar.jsx'
import Options from './../components/data/options/options.jsx'
import User from '../components/data/user/user.jsx'
import Container from './../components/container/container.jsx'
import Input from './../components/data/search/input/input.jsx'
import Repo from '../components/data/repo/repo.jsx'


export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <User/>
                <Options />
                    <Input />
                    <Repo />
            </React.Fragment >
        )
    }
}