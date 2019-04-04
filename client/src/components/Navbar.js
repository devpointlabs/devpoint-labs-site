import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider"
import { Menu, Dropdown, Icon, Button } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import styled from 'styled-components'
import media from '../theme/media'


class Navbar extends React.Component {

  state = {
    show: false
  }

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

  handleDropdown = () => {
    const { show } = this.state

    if (show)
      return(
        <Menu vertical>
          <Menu.Item>
            <Menu.Header>Products</Menu.Header>

            <Menu.Menu>
              <Menu.Item
                name='enterprise'
                active={this.activeItem === 'enterprise'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='consumer'
                active={this.activeItem === 'consumer'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>CMS Solutions</Menu.Header>

            <Menu.Menu>
              <Menu.Item
                name='rails'
                active={this.activeItem === 'rails'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='python'
                active={this.activeItem === 'python'}
                onClick={this.handleItemClick}
              />
              <Menu.Item name='php' active={this.activeItem === 'php'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Hosting</Menu.Header>

            <Menu.Menu>
              <Menu.Item
                name='shared'
                active={this.activeItem === 'shared'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='dedicated'
                active={this.activeItem === 'dedicated'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Support</Menu.Header>

            <Menu.Menu>
              <Menu.Item name='email' active={this.activeItem === 'email'} onClick={this.handleItemClick}>
                E-mail Support
              </Menu.Item>

              <Menu.Item name='faq' active={this.activeItem === 'faq'} onClick={this.handleItemClick}>
                FAQs
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
    ) 
    else {
      return (
        null
      )
    }
  }

  toggleClick = () => this.setState({ show: !this.state.show })

  handleItemClick = name => this.setState({ activeItem: name })

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
          <MenuWeb position='right'>
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
          </MenuWeb>

          <MenuMobile pointing secondary> 
            <Menu.Menu position='right'>
              <Menu.Item >
                <Button 
                  icon
                  onClick={this.toggleClick}
                  >
                  <Icon 
                  name='align justify'
                  >
                  </Icon>
                </Button>
              </Menu.Item>
              { this.handleDropdown() }
          </Menu.Menu>
          </MenuMobile>

        </Menu>
      </div>
    )
  }
}

const MenuMobile = styled(Menu.Menu)`
  display: none !important

  ${media.phone`
    display: flex !important
    float: right !important
  `}
`

const MenuWeb = styled(Menu.Menu)`
  display: flex

  ${media.phone`
    display: none !important
  `}
`

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