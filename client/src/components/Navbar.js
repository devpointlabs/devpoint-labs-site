import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider"
import { Menu, Dropdown, Icon, Button } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import styled from 'styled-components'
import { media } from '../theme/media'


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
        <MobileMenu vertical tabular='right'>
          <MenuItemStyle>
            <Menu.Header>Products</Menu.Header>

            <Menu.Menu>
              <MenuItemStyle
                name='enterprise'
                active={this.activeItem === 'enterprise'}
                onClick={this.handleItemClick}
              />
              <MenuItemStyle
                name='consumer'
                active={this.activeItem === 'consumer'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </MenuItemStyle>

          <MenuItemStyle>
            <Menu.Header>CMS Solutions</Menu.Header>

            <Menu.Menu>
              <MenuItemStyle
                name='rails'
                active={this.activeItem === 'rails'}
                onClick={this.handleItemClick}
              />
              <MenuItemStyle
                name='python'
                active={this.activeItem === 'python'}
                onClick={this.handleItemClick}
              />
              <MenuItemStyle name='php' active={this.activeItem === 'php'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </MenuItemStyle>

          <MenuItemStyle>
            <Menu.Header>Hosting</Menu.Header>

            <Menu.Menu>
              <MenuItemStyle
                name='shared'
                active={this.activeItem === 'shared'}
                onClick={this.handleItemClick}
              />
              <MenuItemStyle
                name='dedicated'
                active={this.activeItem === 'dedicated'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </MenuItemStyle>

          <MenuItemStyle>
            <Menu.Header>Support</Menu.Header>

            <Menu.Menu>
              <MenuItemStyle name='email' active={this.activeItem === 'email'} onClick={this.handleItemClick}>
                E-mail Support
              </MenuItemStyle>

              <MenuItemStyle name='faq' active={this.activeItem === 'faq'} onClick={this.handleItemClick}>
                FAQs
              </MenuItemStyle>
            </Menu.Menu>
          </MenuItemStyle>
        </MobileMenu>
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

          <MenuMobile pointing secondary position='right'> 
            <Menu.Menu>
              <Menu.Item >
                <ButtonStyle 
                  floated='right'
                  icon
                  onClick={this.toggleClick}
                  >
                  <Icon 
                  name='align justify'
                  >
                  </Icon>
                </ButtonStyle>
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

const MenuItemStyle = styled(Menu.Item)`
  width: 100%
  text-align: left
`

const MobileMenu = styled(Menu)`
  border: none !important
  background: transparent !important
`
const ButtonStyle = styled(Button)`
  position: relative !important
`

export default withRouter(ConnectedNavbar);