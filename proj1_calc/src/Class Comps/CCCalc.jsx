import { Component } from "react";

export default class CCCalc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num1: 0,
            num2: 0,
            result: 0
        };
    }






    render() {
        const { result } = this.state

        return (
            <div>
                Num1: <input type="number" /><br />
                Num2: <input type="number" /> <br /><br />
                <div className="my-button">
                    <button onClick={this.handleAddition}>+</button> <button id="buttonMinus" onClick={this.handleMinus}>-</button><br /> 
                    <button id="buttonMultiplication" onClick={this.handleMultiplication}>*</button> <button id="buttonDivision">/</button>
                </div><br /><br /> <br /> <br />
                Result: <input type="number" />
            </div>
        )

    }


}