import React from 'react'
import Nav from './Nav'
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstNumber:'',
            secondNumber:''
        };
    };
    handleChange=(event)=>{
        var inputName = event.target.name;
        var inputValue = event.target.value;
        this.setState({[inputName]:inputValue});
    }
    add=()=>{
        let num1 = parseFloat(this.state.firstNumber);
        let num2 = parseFloat(this.state.secondNumber);
        let resutl = num1 + num2;
        let added = resutl.toFixed(2);
    }
    sub=()=>{
        let num1 = parseFloat(this.state.firstNumber);
        let num2 = parseFloat(this.state.secondNumber);
        let resutl = num1 - num2;
        let subbed = resutl.toFixed(2);
    }
    multi=()=>{
        let num1 = parseFloat(this.state.firstNumber);
        let num2 = parseFloat(this.state.secondNumber);
        if(isNaN(num2) || num2<1){
            let mult = '';
        }else{
            let resutl = num1 * num2;
            let mult = resutl.toFixed(2);
        }
    }
    div=()=>{
        let num1 = parseFloat(this.state.firstNumber);
        let num2 = parseFloat(this.state.secondNumber);
        if(isNaN(num2) || num2<1){
            let div = '';
        }else{
            let resutl = num1 / num2;
            let div = resutl.toFixed(2);
        }
    }
    render() {
        return(
            <div>
                <Nav />
                <div className="container">
                    <div className="row">
                        <h1 className="mt-5 text-center text-info">Welcome to The Basic Calculator</h1>
                        <div className="col-md-6">
                            <form>
                                <h4>Enter your value</h4>
                                <label htmlFor="inputNumber" className="form-label">Enter First Number:</label>
                                <input type="number" value={this.state.number1} onChange={this.handleChange} className="form-control" name="firstNumber" id="firstNumber" placeholder="Enter your number"/>
                                <label htmlFor="inputNumber" className="form-label">Enter Second Number:</label>
                                <input type="number" value={this.state.number2} onChange={this.handleChange} className="form-control" name="secondNumber" id="secondNumber" placeholder="Enter your number"/>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <h4 className="mb-4">Result</h4>
                            <p>Addition : <span></span></p>
                            <p>Subtraction : <span>{ this.state.secondNumber }</span></p>
                            <p>Multiply : <span></span></p>
                            <p>Division : <span></span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;