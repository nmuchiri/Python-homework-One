import { Switch, Route } from 'react-router-dom'

// Components imports
import Home from "./components/Home"
// HOC which wraps around other components
import Layout from "./components/common/Layout"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Profile from "./components/Profile"
import Event from "./components/Event"
import EventList from "./components/EventList"

// CSS imports
import "./css/App.css";

const App = () => {

  return (
    <Layout>
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/events/:id" component={Event} />
        <Route exact path="/savedevents" component={EventList} />
      </Switch>
    </Layout>
  );
};

export default App;
