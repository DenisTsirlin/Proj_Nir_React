import { Component } from "react";

export default class CCMath extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            result: 0,
           
        };
    }
    chgNum1 = (e) => {
        this.setState({ num1: Number(e.target.value) });
        };
    chgNum2 = (e) => {
        this.setState({ num2: Number(e.target.value) });
        };
     handleAddition = () => {
        const { num1, num2 } = this.state;
        console.log("num1:", num1, "num2:", num2);
        this.setState({ result: num1 + num2 });
        };
       
     handleMinus= () => { 
        const { num1, num2 } = this.state;
        console.log("num1:", num1, "num2:", num2);
        this.setState({ result: num1 - num2});

        };
        
     handleMultiplication= () => { 
        const { num1, num2 } = this.state;
        console.log("num1:", num1, "num2:", num2);
        this.setState({ result: num1 * num2});

        };
     handleDivision= () => { 
        const { num1, num2 } = this.state;
        console.log("num1:", num1, "num2:", num2);
        this.setState({ result: num1 / num2});

     };
    
     
    render() {
        const { result} = this.state

        return (
            <div>
                Num1: <input type="number" onChange={this.chgNum1}/><br />
                Num2: <input type="number" onChange={this.chgNum2}/> <br/> <br />
                <div className="my-button">
                    <button onClick={this.handleAddition}>+</button>
                    <button id="buttonMinus" onClick={this.handleMinus}>-</button><br /> 
                    <button id="buttonMultiplication" onClick={this.handleMultiplication}>*</button>
                    <button id="buttonDivision" onClick={this.handleDivision}>/</button>
                </div><br/><br />
                Result: <input type="number" value={result} readOnly/>
                <br />
            </div>
            
        )

    }
}