import "./App.css";
import Login from "./components/authuser/Login";
import Loading from "./components/Notes";
import Register from "./components/authuser/Register";
import Landing from "./components/Landing";
import Pages from "./components//notebookComponent/Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/notebook" component={Loading} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/notebook/:id" component={Pages} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
