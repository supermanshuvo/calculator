import Nav from './Nav'
const Home = () =>{
    return(
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <h1 className="mt-5 text-center text-info">Welcome to The Basic Calculator</h1>
                    <div className="col-md-6">
                        <h4>Enter your value</h4>
                        <label for="inputNumber" className="form-label">Enter First Number:</label>
                        <input type="number" className="form-control" name="firstNumber" id="firstNumber" placeholder="Enter your number"/>
                        <label for="inputNumber" className="form-label">Enter Second Number:</label>
                        <input type="number" className="form-control" name="secondNumber" id="secondNumber" placeholder="Enter your number"/>
                    </div>
                    <div className="col-md-6">
                        <h4 className="mb-4">Result</h4>
                        <p>Addition : <span></span></p>
                        <p>Subtraction : <span></span></p>
                        <p>Multiply : <span></span></p>
                        <p>Division : <span></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;