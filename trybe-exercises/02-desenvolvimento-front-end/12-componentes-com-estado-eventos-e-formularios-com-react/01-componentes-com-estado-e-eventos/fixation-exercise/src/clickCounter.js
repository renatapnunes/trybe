import React from 'react';

class ClickCounter extends React.Component {
    constructor() {
        super()
        this.state = {
            numberOfClicks: 0,
            color: 'grey',
        }
        this.handleClick = this.handleClick.bind(this);
        this.counter = this.counter.bind(this);
        this.greenColor = this.greenColor.bind(this);
        this.blueColor = this.blueColor.bind(this);
    }

    counter() {
        this.setState((previousState, _props) => ({
            numberOfClicks: previousState.numberOfClicks + 1
        }))
    }

    blueColor() {
        this.setState((previousState, _props) => ({
            color: 'blue',
        }))
    }

    greenColor() {
        this.setState((previousState, _props) => ({
            color: 'green',
        }))
    }

    handleClick() {
        this.counter()
        if (this.state.numberOfClicks % 2 === 0) {
            console.log('Cor do botão: azul')
            return this.blueColor()
        } else {
            console.log('Cor do botão: verde')
            return this.greenColor()
        }
    }

    render() {
        return (
            <button className={ this.state.color } onClick={ this.handleClick }>{ this.state.numberOfClicks }</button>
        )
    }
}

export default ClickCounter;