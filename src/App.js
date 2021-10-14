import "./App.css";
import Login from "./components/authuser/Login";
import Dashboard from "./components/notebookComponent/Sidebar";
import Register from "./components/authuser/Register";
import Landing from "./components/Landing";
import ResetLink from "./components/authuser/ResetLink";
import UpdatePassword from "./components/authuser/Updatepassword";
import { io } from "socket.io-client";
import Loading from "./components/loader/Userloading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/landing" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={ResetLink} />
          <Route exact path="/reset/:token" component={UpdatePassword} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
