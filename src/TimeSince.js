import React, { Component } from 'react';
import beerGlassImage from './beer-glass.png';

class TimeSince extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lastDrink: new Date("2023-05-27T14:33:00"), // replace with your last drink datetime
            now: new Date(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            now: new Date()
        });
    }

    render() {
        // Calculate difference in seconds
        const diffInSeconds = Math.abs((this.state.now - this.state.lastDrink) / 1000);
        let remaining = diffInSeconds;

        const years = Math.floor(remaining / (3600*24*30*12));
        remaining %= (3600*24*30*12);

        const months = Math.floor(remaining / (3600*24*30));
        remaining %= (3600*24*30);

        const days = Math.floor(remaining / (3600*24));
        remaining %= (3600*24);

        const hours = Math.floor(remaining / 3600);
        remaining %= 3600;

        const minutes = Math.floor(remaining / 60);
        const seconds = Math.floor(remaining % 60);

        return (
            <div>
                <div className="img-container">
                    <img src={beerGlassImage} alt="Beer Glass" />
                </div>
                <h1>Time since last alcohol drink:</h1>
                <p>{years} years, {months} months, {days} days, {hours} hours, {minutes} minutes, {seconds} seconds</p>
            </div>
        );
    }
}

export default TimeSince;