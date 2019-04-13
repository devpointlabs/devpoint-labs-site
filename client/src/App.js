import React, { Fragment } from "react";
import Home from "./components/Home/Home";
import NoMatch from "./components/MAIN/NoMatch";
import FullTimeUtah from "./components/FullTimeUtah/FullTimeUtah";
import About from "./components/About/About";
import Community from "./components/Community";
import ApplicationsForm from "./components/Application/ApplicationsForm";
import Navbar from "./components/MAIN/Navbar";
import Login from "./components/MAIN/Login";
import Profile from './components/Application/Profile'
import Register from "./components/MAIN/Register";
import { Switch, Route } from "react-router-dom";
import FreeHousing from "./components/Housing/FreeHousing";
import FetchUser from "./components/MAIN/FetchUser";
import ScholarshipForm from "./components/Scholarship/ScholarshipForm";
import PartTimeUtah from "./components/PartTimeUtah/PartTimeUtah";
import PartTimeLV from "./components/PartTimeLV/PartTimeLV";
import ContactForm from "./components/Contact/ContactForm";
import FinancingScholarships from "./components/Scholarship/FinancingScholarships";
import StudentHousing from "./components/Housing/StudentHousing";
import EmailPage from "./components/Application/EmailPage";
import ProtectedRoute from "./components/MAIN/ProtectedRoute";
import ApplicationsView from "./components/Application/ApplicationsView";
import Scholarship from "./components/Scholarship/Scholarship";
import ScholarshipsView from "./components/Scholarship/ScholarshipsView";
import Subscribers from "./components/Application/Subscribers";
import SubscribersView from "./components/Subscribe/SubscribersView";
import Contacts from './components/Contact/Contacts'
import ContactsView from './components/Contact/ContactsView'

const App = () => (
  <Fragment>
    <Navbar />
    <div>
      <FetchUser>
        <Switch>
          <ProtectedRoute exact path="/EmailPage" component={EmailPage} />
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
