import React, { Component } from 'react'
import user from './../../../resource/user.jsx'
import './user.scss'

export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatar: ``,
            name: ``,
            bio: ``
        }
    }

    componentDidMount() {
        user()
            .then((resp) => {
                const upAvatar = resp.data.avatar_url
                const upName = resp.data.name
                const upBio = resp.data.bio

                this.setState({
                    avatar: upAvatar,
                    name: upName,
                    bio: upBio
                })
            })

            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className='user'>
                <img src={this.state.avatar} alt='' className='user__avatar' />
                <div className='user__infos'>
                    <p className='user__name'>{this.state.name}</p>
                    <p className='user__bio'>{this.state.bio}</p>
                </div>
            </div>
        )
    }
}