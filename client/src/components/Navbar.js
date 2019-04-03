import React from 'react'
import CoursesDropDown from './CoursesDropDown'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Button, Dropdown, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import CourseDropDown from './CoursesDropDown';

class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
            />
        </>
      )
    } else {
      return (
          <Button >
            <Link to='/login'>
              <Menu.Item
                id='login'
                name='login'
                active={location.pathname === '/login'}
              />
            </Link>
          </Button>
      )
    }
  }


  
  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='this should be the devpoint logo'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
          <Menu.Menu position='right' >
          <Dropdown item name='coursesoptions={CoursesDropDown} />
          <Link to='/about'>
            <Menu.Item 
              id='about'
              name='about'
          />
          </Link>
          <Link to='/community'>
            <Menu.Item 
              id='community'
              name='community'
          />
          </Link>
            { this.rightNavItems() }
            <Link to='/application'>
            <Menu.Item
              id='apply'
              name='Apply Now'
              active={this.props.location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);