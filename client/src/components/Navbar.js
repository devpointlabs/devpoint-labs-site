import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider"
import { Menu, Dropdown, Icon, Button, Image, MenuHeader } from 'semantic-ui-react'
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

    if (show)
      return(
        <MobileMenu vertical tabular='left'>
          <Image
            style={{ display: 'flex !important', justifyContent: 'center !important'}}
            src="https://cdn-images-1.medium.com/max/1200/0*dtc87Aa74oYbGyrI.jpg" 
            alt=""
          />
          <MenuItemStyle>
          <Dropdown as={Menu.Item} text='Courses' options={courseOptions} simple item />
          </MenuItemStyle>

          <Link as={MenuItemStyle} to='/about'>
              <Menu.Item
                
                id='about'
                name='about'
                active={this.props.location.pathname === '/about'}
              />
            </Link>
            <MenuItemStyle>
              <Dropdown as={Menu.Item} text='Community' options={options} simple item />
            </MenuItemStyle>
            <Link to='/application'>
              <Menu.Item
                id='apply'
                name='Apply Now'
                active={this.props.location.pathname === '/register'}
              />
            </Link>
            { this.rightNavItems() }
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
            <MenuWebItem
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

          <MenuMobile pointing secondary position='left'> 
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
const MenuWebItem = styled(Menu.Item)`
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