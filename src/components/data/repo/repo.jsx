import React, { Component } from 'react'
import repo from '../../../resource/repo.jsx'
import code from './code.svg'
import './repo.scss'
import Options from '../options/options.jsx';


export default class Repo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            infos: []
        }
    }


    componentDidMount() {
        repo()
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
                    <RepoListItems infos={this.state.infos} />
                </div>
            </React.Fragment>
        )
    }
}


const RepoListItems = (props) => {
    const items = props.infos.map((info, id) =>
        <React.Fragment key={id}>
            <li className='repo-list__item' >
                <p className='repo__name'>{info.name}</p>
                <p className='repo__description'>{info.description}</p>
                <div className='repo__top'>
                    <img src={code} alt='Code symbol' className='repo__language-img' />
                    <p className='repo__language'>{info.language}</p>
                    <p className='repo__forks'>{info.forks === 0 ? `` : info.forks}</p>
                </div>
            </li>
            <div className='repo__line' />
        </React.Fragment>
    )
    return (
        <ul className='repo-list'>
            {items}
        </ul>
    )
}