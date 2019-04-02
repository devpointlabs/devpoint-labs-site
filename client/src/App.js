import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Courses from './components/Courses';
import About from './components/About';
import Community from './components/Community';
import Application from './components/Application';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchUser from './components/FetchUser';


const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/Courses" component={Courses} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Community" component={Community} />
          <Route exact path="/Application" component={Application} />
          <Route component={NoMatch} />
        </Switch>
      <Footer />
      </Container>
    </FetchUser>
  </Fragment>
)

export default App;

