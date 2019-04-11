import React, { Fragment } from "react";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import FullTimeUtah from "./components/FullTimeUtah";
import About from "./components/About";
import Community from "./components/Community";
import ApplicationsForm from "./components/ApplicationsForm";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Profile from './components/Profile'
import Register from "./components/Register";
import { Switch, Route } from "react-router-dom";
import FreeHousing from "./components/FreeHousing";
import FetchUser from "./components/FetchUser";
import ScholarshipForm from "./components/ScholarshipForm";
import PartTimeUtah from "./components/PartTimeUtah";
import PartTimeLV from "./components/PartTimeLV";
import ContactForm from "./components/ContactForm";
import FinancingScholarships from "./components/FinancingScholarships";
import StudentHousing from "./components/StudentHousing";
import Applicants from "./components/Applicants";
import ProtectedRoute from "./components/ProtectedRoute";
import ApplicationsView from "./components/ApplicationsView";
import Scholarship from "./components/Scholarship";
import ScholarshipsView from "./components/ScholarshipsView";
import Subscribers from "./components/Subscribers";
import SubscribersView from "./components/SubscribersView";
import Contacts from './components/Contacts'
import ContactsView from './components/ContactsView'

const App = () => (
  <Fragment>
    <Navbar />
    <div>
      <FetchUser>
        <Switch>
          <ProtectedRoute exact path="/Applicants" component={Applicants} />
          <ProtectedRoute exact path="/Scholarship" component={Scholarship} />
          <ProtectedRoute exact path="/Subscribers" component={Subscribers} />
          <ProtectedRoute exact path="/Profile" component={Profile} />
          <ProtectedRoute exact path='/Contacts' component={Contacts} />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/fulltimeutah" component={FullTimeUtah} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Community" component={Community} />
          <Route exact path="/freehousing" component={FreeHousing} />
          <Route exact path="/ScholarshipForm" component={ScholarshipForm} />
          <Route exact path="/ApplicationsForm" component={ApplicationsForm} />
          <Route
            exact
            path="/FinancingScholarships"
            component={FinancingScholarships}
          />
          <Route exact path="/PartTimeUtah" component={PartTimeUtah} />
          <Route exact path="/PartTimeLV" component={PartTimeLV} />
          <Route exact path="/ContactUs" component={ContactForm} />
          <Route exact path="/StudentHousing" component={StudentHousing} />
          <Route
            exact
            path="/applications/:id"
            render={() => <ApplicationsView />}
          />
          <Route
            exact
            path="/scholarships/:id"
            render={() => <ScholarshipsView />}
          />
          <Route
            exact
            path="/subscribers/:id"
            render={() => <SubscribersView />}
          />
          <Route 
          exact path='/contacts/:id'
          render={() => <ContactsView />}
          />
          <Route component={NoMatch} />
        </Switch>
      </FetchUser>
    </div>
  </Fragment>
);

export default App;
