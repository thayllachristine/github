import React, { Component } from 'react'
import './home.scss'

import Navbar from './../components/nav/navbar.jsx'
import Row from './../components/grid/row/row.jsx'
import Column from './../components/grid/row/column/column.jsx'
import User from '../components/data/user/user.jsx'
import Options from './../components/data/options/options.jsx'
import Input from './../components/data/search/input/input.jsx'
import Repo from '../components/data/repo/repo.jsx'


const kkk = {
    border: '1px solid red',
}


export default class Home extends Component {


    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Row>
                    <Column>
                        <User />
                    </Column>
                    <Column>
                        <Options />
                        <Input />
                        <Repo />
                    </Column>
                </Row>
            </React.Fragment >
        )
    }
}