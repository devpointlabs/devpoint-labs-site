import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider"
import { Menu, Dropdown, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'


class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <>
          <Menu.Item
            name='logout'
            onClick={() => handleLogout(this.props.history)}
          />
        </>
      )
    } else {
      return (
        <>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
        </>
      )
    }
  }



  render() {

    const options = [
      { key: 1, text: 'Events', value: 1, href: 'https://www.meetup.com/devpoint-labs/', target: '_blank' },
      { key: 2, text: 'Blog', value: 2, href: 'https://devpointlabs.tumblr.com/', target: '_blank' },
      { key: 3, text: 'Shop', value: 3, href: 'https://devpointlabs.bigcartel.com/', target: '_blank' },
    ]

    const courseOptions = [
      { key: 1, text: 'Full Time Course - SLC, Utah', value: 1, href: '/fulltimeutah', target: '_blank' },
      { key: 2, text: 'Part Time Course - SLC, Utah', value: 2, href: '/parttimeutah', target: '_blank' },
      { key: 3, text: 'Part Time Course - UNLV, Nevada', value: 3, href: '/parttimeLV', target: '_blank' },
    ]

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
          <Menu.Menu position='right'>
            <Menu.Item>
              <Dropdown text='Courses' options={courseOptions} simple item />
            </Menu.Item>
            <Link to='/about'>
              <Menu.Item
                
                id='about'
                name='about'
                active={this.props.location.pathname === '/about'}
              />
            </Link>
            <Menu.Item>
              <Dropdown text='Community' options={options} simple item />
            </Menu.Item>
            {this.rightNavItems()}
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
        {auth =>
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);