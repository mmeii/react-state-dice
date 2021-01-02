import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };

    constructor(props) {
        super(props);
        this.state = { die1: "one", die2: "one", rolling: false }
    }

    roll() {
        let random = Math.floor(Math.random())
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default RollDice;
