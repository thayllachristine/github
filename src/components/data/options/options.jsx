import React, { Component } from 'react'
import user from './../../../resource/user.jsx'
import starred from './../../../resource/starred.jsx'
import './options.scss'

class Options extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numRepo: ``,
            numStar: ``,
            firstOptionSelected: false,
            secondOptionSelected: false
        }
    }


    componentWillMount() {
        user()
            .then((resp) => {
                const dt = resp.data.public_repos
                this.setState({ numRepo: dt })
            })
            .catch((err) => { console.error(err) })

        starred()
            .then((resp) => {
                const dt = resp.data
                const dtLength = Object.keys(dt).length
                this.setState({ numStar: dtLength })
            })
            .catch((err) => { console.error(err) })
    }


    handleMouseEnter1stOption = (ev) => {
        ev.preventDefault()
        console.log("AEEE")
        this.setState({ firstOptionSelected: true })
    }

    handleMouseLeave1stOption = (ev) => {
        ev.preventDefault()
        this.setState({ firstOptionSelected: false })
    }

    handleMouseEnter2ndOption = (ev) => {
        ev.preventDefault()
        console.log("AEEE")
        this.setState({ secondOptionSelected: true })
    }

    handleMouseLeave2ndOption = (ev) => {
        ev.preventDefault()
        this.setState({ secondOptionSelected: false })
    }

    render() {
        return (
            <div className='options'>
                <div className=
                    {this.state.firstOptionSelected
                        ? 'options__1st_selected'
                        : 'options__1st'}
                    onMouseEnter={this.handleMouseEnter1stOption}
                    onMouseLeave={this.handleMouseLeave1stOption}
                >
                    <p className='options__repo'>Repos</p>
                    <div className='options__numbers'>
                        <p>{this.state.numRepo}</p>
                    </div>
                </div>

                <div className=
                    {this.state.secondOptionSelected
                        ? 'options__2nd_selected'
                        : 'options__2nd'}
                    onMouseEnter={this.handleMouseEnter2ndOption}
                    onMouseLeave={this.handleMouseLeave2ndOption}
                >
                    <p className='options__repo'>Starred</p>
                    <div className='options__numbers'>
                        <p>{this.state.numStar}</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Options