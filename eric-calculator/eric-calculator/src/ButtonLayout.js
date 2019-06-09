import React, { Component } from 'react';

export default class ButtonLayout extends Component {

    state = {
        firstInput: "",
        operator: "",
        secondInput: "",
        finalOutput: 0
    }

    clearClick = event => {
        event.preventDefault()
        const value = ""

        this.setState({
            firstInput: value,
            operator: value,
            secondInput: value,
            finalOutput: 0
        })
    }

    enterClick = () => {
        switch (this.state.operator) {
            case "+": const sum = (parseInt(this.state.firstInput) + parseInt(this.state.secondInput))
                this.setState({ finalOutput: sum })
                break

            case "-": const diff = (parseInt(this.state.firstInput) + parseInt(this.state.secondInput))
                this.setState({ finalOutput: diff })
                break

            case "x": const product = (parseInt(this.state.firstInput) + parseInt(this.state.secondInput))
                this.setState({ finalOutput: product })
                break

            case "/": const quotient = (parseInt(this.state.firstInput) + parseInt(this.state.secondInput))
                this.setState({ finalOutput: quotient })
                break

            default: this.setState({ finalOutput: 0 })
        }
    }

    operatorChange = event => {
        const target = event.target
        const value = target.value

        this.setState({
            operator: value
        })
    }

    inputChange = event => {
        const target = event.target
        const value = target.value

        if (this.state.operator === "") {
            this.setState({
                firstInput: value
            })
        }
        else if (this.state.operator !== "" && this.state.firstInput === "") {
            this.setState({
                firstInput: value
            })
        }
        else {
            this.setState({
                secondInput: value
            })
        }
    }

    render() {
        return (
            <div>
                <div className="outputScreen">
                    <h2>{this.state.finalOutput}</h2>
                    <p>{this.state.firstInput}</p>
                    <p>{this.state.operator}</p>
                    <p>{this.state.secondInput}</p>
                </div>
                <div className="operatorRow">
                    <button value="+" onClick={this.operatorChange}>+</button>
                    <button value="-" onClick={this.operatorChange}>-</button>
                    <button value="x" onClick={this.operatorChange}>x</button>
                    <button value="/" onClick={this.operatorChange}>/</button>
                </div>
                <div className="buttonRowOne">
                    <button value="1" onClick={this.inputChange}>1</button>
                    <button value="2" onClick={this.inputChange}>2</button>
                    <button value="3" onClick={this.inputChange}>3</button>
                </div>
                <div className="buttonRowTwo">
                    <button value="4" onClick={this.inputChange}>4</button>
                    <button value="5" onClick={this.inputChange}>5</button>
                    <button value="6" onClick={this.inputChange}>6</button>
                </div>
                <div className="buttonRowThree">
                    <button value="7" onClick={this.inputChange}>7</button>
                    <button value="8" onClick={this.inputChange}>8</button>
                    <button value="9" onClick={this.inputChange}>9</button>
                </div>
                <div className="enterClearRow">
                    <button onClick={this.enterClick}>Enter</button>
                    <button onClick={this.clearClick}>Clear</button>
                </div>
            </div>
        )
    }
}