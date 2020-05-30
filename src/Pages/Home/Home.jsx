import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Countdown from '../../Components/Countdown/Countdown'
import Landing from '../../Components/Landing/Landing';
import './Home.scss'
import Wishes from '../Wishes/Wishes';
export default class Home extends Component {
    state = {
        itHerBirthday: false
    }
    handleFireworks = () => {
        this.setState({ itHerBirthday: true })
    }
    render() {
        return (
            <div className="Home">
                {this.state.itHerBirthday ? <Landing /> : null}
                <Header />
                {this.state.itHerBirthday ? <Wishes /> : <Countdown handleFireworks={this.handleFireworks} />}

            </div>
        )
    }
}
