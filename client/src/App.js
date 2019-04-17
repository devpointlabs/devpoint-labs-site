import React, { Fragment } from "react";
import Home from "./components/Home/Home";
import NoMatch from "./components/MAIN/NoMatch";
import FullTimeUtah from "./components/FullTimeUtah/FullTimeUtah";
import About from "./components/About/About";
import Community from "./components/Community";
import ApplicationsForm from "./components/Application/ApplicationsForm";
import Navbar from "./components/MAIN/Navbar";
import Login from "./components/MAIN/Login";
import Profile from "./components/Application/Profile";
import Register from "./components/MAIN/Register";
import { Switch, Route } from "react-router-dom";
import EditCourses from './components/EditCourses';
import CourseForm from './components/CourseForm';
import FetchUser from "./components/MAIN/FetchUser";
import ScholarshipForm from "./components/Scholarship/ScholarshipForm";
import PartTimeUtah from "./components/PartTimeUtah/PartTimeUtah";
import PartTimeLV from "./components/PartTimeLV/PartTimeLV";
import ContactForm from "./components/Contact/ContactForm";
import StudentHousing from "./components/Housing/StudentHousing";
import ProtectedRoute from "./components/MAIN/ProtectedRoute";
import ApplicationsView from "./components/Application/ApplicationsView";
import Scholarship from "./components/Scholarship/Scholarship";
import ScholarshipsView from "./components/Scholarship/ScholarshipsView";
import Subscribers from "./components/Application/Subscribers";
import SubscribersView from "./components/Subscribe/SubscribersView";
import Contacts from "./components/Contact/Contacts";
import ContactsView from "./components/Contact/ContactsView";
import Applicants from "./components/Application/Applicants";
import AppNotesForm from "./components/Application/AppNotesForm";
import AboutDPL from "./components/About/AboutDPL";
import AboutDPLEdit from "./components/About/AboutDPLEdit";
import AboutForm from "./components/About/AboutForm";
import AboutEditForm from "./components/About/AboutEditForm";
import ConNotesForm from "./components/Contact/ConNotesForm";
import ScholarshipFormNotes from "./components/Scholarship/ScholarshipFormNotes";
import AppSubmitPage from './components/Application/AppSubmitPage'
import ContactSubmitPage from './components/Contact/ContactSubmitPage'
import DPLScholarships from './components/Scholarship/DPLScholarships'

class App extends React.Component {

  // fake authentication Promise
  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if (ele) {
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }

  render() {
    return (
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
              <Route exact path='/ContactSubmitPage' component={ContactSubmitPage} />
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/fulltimeutah" component={FullTimeUtah} />
              <Route exact path="/About" component={About} />
              <Route exact path="/AppSubmitPage" component={AppSubmitPage} />
              <Route exact path="/Community" component={Community} />
              <Route exact path="/ScholarshipForm" component={ScholarshipForm} />
              <Route exact path="/ApplicationsForm" component={ApplicationsForm} />
              <Route exact path="/Applications/:id/edit" component={AppNotesForm} />
              <Route exact path="/AboutDPL" component={AboutDPL} />
              <ProtectedRoute exact path="/AboutDPLEdit" component={AboutDPLEdit} />
              <ProtectedRoute exact path="/AboutForm" component={AboutForm} />
              <ProtectedRoute exact path="/About/:id/edit" component={AboutEditForm} />
              <Route exact path="/Contacts/:id/edit" component={ConNotesForm} />
              <Route exact path="/DPLScholarships" component={DPLScholarships} />
              <Route exact path="/Scholarships/:id/edit" component={ScholarshipFormNotes} />
              <Route exact path="/PartTimeUtah" component={PartTimeUtah} />
              <Route exact path="/PartTimeLV" component={PartTimeLV} />
              <Route exact path="/ContactForm" component={ContactForm} />
              <Route exact path="/StudentHousing" component={StudentHousing} />
              <Route
                exact
                path="/About/:id"
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
  }
}


export default App;
