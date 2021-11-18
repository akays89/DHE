import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
// import Navbar from "./components/NavBar";


function App() {
  return (
      <Router>

            {/* <Navbar /> */}
            <Switch >
                <Redirect exact from="/" to="/home"></Redirect>
                <Route path="/home" component={Home}></Route>
              
            </Switch>
            {/* <Footer /> */}
        
    </Router>
  );
}


export default App;
