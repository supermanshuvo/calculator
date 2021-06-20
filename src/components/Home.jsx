import Nav from './Nav'
const Home = () =>{
    return(
        <div>
            <Nav />
            <div className="container">
                <div className="row text-center">
                    <h1 className="mt-5 text-info">Welcome to The Basic Calculator</h1>
                    <div className="col-md-6"></div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
}
export default Home;