import React, { Component } from 'react'
import star from './star.svg'
import branch from './git-branch.svg'
import starred from './../../../resource/starred.jsx'
import './starred.scss'


export default class Starred extends Component {
    constructor(props) {
        super(props)
        this.state = {
            infos: []
        }
    }


    componentWillMount() {
        starred()
            .then((resp) => {
                this.setState({
                    infos: resp.data
                })
                console.log(this.state.infos)
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className='repo'>
                    <StarredListItems infos={this.state.infos} />
                </div>
            </React.Fragment>
        )
    }
}


const StarredListItems = (props) => {
    const items = props.infos.map((info, id) =>
        <React.Fragment key={id}>
            <li className='repo-list__item' >
                <p className='repo__name'> <span>{info.owner.login} /</span> {info.name}</p>
                <p className='repo__description'>{info.description}</p>
                <div className='repo__top'>
                    <img src={star} alt='Star symbol' className='repo__star-img' />
                    <p className='repo__stars-count'>{info.stargazers_count}</p>
                    {
                        info.forks === 0
                            ? ``
                            : <img src={branch} alt='Star symbol' className='repo__forks-img' />
                    }
                    <p className='repo__forks'>{info.forks === 0 ? `` : info.forks}</p>
                </div>
            </li>
            <div className='repo__line' />
        </React.Fragment >
    )
    return (
        <ul className='repo-list'>
            {items}
        </ul>
    )
}