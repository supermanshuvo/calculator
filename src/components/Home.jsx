import React from "react";
import Nav from "./Nav";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: "",
      secondNumber: "",
      add: "",
      sub: "",
      mul: "",
      div: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    let inputName = event.target.name;
    let inputValue = event.target.value;
    this.setState({ [inputName]: inputValue });
  };
  handleSubmit(event) {
    let fNum = parseFloat(this.state.firstNumber);
    let sNum = parseFloat(this.state.secondNumber);
    let addTotal = fNum + sNum;
    let subTotal = fNum - sNum;
    if (isNaN(fNum) || isNaN(sNum)) {
      let warring = "Kindly Enter numbers!";
      this.setState({ add: warring, sub: warring, mul: warring, div: warring });
      event.preventDefault();
    } else if (sNum < 1) {
      let warring = "Kindly Enter more then zero!";
      this.setState({ add: addTotal, sub: subTotal, mul: warring });
    } else {
      let mulTotal = fNum * sNum;
      let divTotal = fNum / sNum;
      this.setState({
        add: addTotal,
        sub: subTotal,
        mul: mulTotal,
        div: divTotal,
      });
      event.preventDefault();
    }
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <h1 className="mt-5 text-center text-info">
              Welcome to The Basic Calculator
            </h1>
            <div className="col-md-6">
              <form onSubmit={this.handleSubmit}>
                <h4>Enter your value</h4>
                <label htmlFor="inputNumber" className="form-label">
                  Enter First Number:
                </label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  className="form-control"
                  name="firstNumber"
                  id="firstNumber"
                  placeholder="Enter your number"
                />
                <label htmlFor="inputNumber" className="form-label">
                  Enter Second Number:
                </label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  className="form-control"
                  name="secondNumber"
                  id="secondNumber"
                  placeholder="Enter your number"
                />
                <br></br>
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                />
              </form>
            </div>
            <div className="col-md-6">
              <h4 className="mb-4">Result</h4>
              <p>
                Addition : <span>{this.state.add}</span>
              </p>
              <p>
                Subtraction : <span>{this.state.sub}</span>
              </p>
              <p>
                Multiply : <span>{this.state.mul}</span>
              </p>
              <p>
                Division : <span>{this.state.div}</span>
              </p>
            </div>
          </div>
        </div>
        <p className="text-center font-weight-bold">
          Create by{" "}
          <a href="https://www.facebook.com/supermanshuvo/">Rezaul Karim</a>
        </p>
      </div>
    );
  }
}
export default Home;
