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

  showMenu(event) {
    event.preventDefault();
    
    this.setState({
      showMenu: true,
    });
  }

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {

      return (
          <Dropdown as={Icon}
            name='user circle'
            color='black'
            size='large'
            style={{ transform: 'translate(0, 1em)'}}
          >
            <Dropdown.Menu>
              <Dropdown.Item text='Applicants' href='/EmailPage' />
              <Dropdown.Item onClick={() => handleLogout(this.props.history)} href='/' text='Logout' />
            </Dropdown.Menu>
          </Dropdown>
      )
    } else {
      return (
        <>
        <Link to='/login' style={{ transform: 'translate(0, 1em)'}}>
          <Menu.Item as={Button}
            inverted
            color='black'
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
      <Mobile>
          <Dropdown as={Menu.Item} text='Courses' options={courseOptions} fluid item/>

        <Link as={Button} to='/about'>
            <Menu.Item
              id='about'
              name='about'
              active={this.props.location.pathname === '/about'}
            />
          </Link>
            <Dropdown as={Menu.Item} text='Community' options={options} fluid item />
          <Link to='/ApplicationsForm'>
            <Menu.Item
              id='application'
              name='Apply Now'
              active={this.props.location.pathname === '/ApplicationsForm'}
              />
          </Link>
          { this.rightNavItems() }
      </Mobile>
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
      { key: 1, text: 'Full Time Course - SLC, Utah', value: 1, href: '/fulltimeutah' },
      { key: 2, text: 'Part Time Course - SLC, Utah', value: 2, href: '/parttimeutah' },
      { key: 3, text: 'Part Time Course - UNLV, Nevada', value: 3, href: '/parttimeLV' },
    ]

    return (
      <>
        <MenuStyles secondary>
          <Link to='/'>
              <WebLogoStyle floated='left' src='https://s3.invisionapp-cdn.com/storage.invisionapp.com/boards/files/105142674.png?x-amz-meta-iv=6&x-amz-meta-ck=5a81039525e5126ffd527a9f9f49b565&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1556668800&Signature=WtADJjHKLaiVmZh%2BIHmiw%2FjnJPw%3D' />
          </Link>
          <MenuWeb position='right'>
            <Dropdown text='Courses' options={courseOptions} simple item />
            <Link to='/about' style={{ transform: 'translate(0, 1.2em)'}}>
              <Menu.Item
                id='about'
                name='about'
                active={this.props.location.pathname === '/about'} 
                />
            </Link>
            <Dropdown text='Community' options={options} simple item />
            {this.rightNavItems()}
            <Link to='/ApplicationsForm'>
              <ButtonStyle
                animated 
                color='black'
                active={this.props.location.pathname === '/register'}
              >
                <Button.Content visible>Apply Now</Button.Content>
                <Button.Content 
                  hidden
                  color='black'
                  >
                  <Icon name='arrow right' />
                </Button.Content>
              </ButtonStyle>
            </Link>
          </MenuWeb>

          <MenuMobile inverted floated='right'> 
              <Menu.Menu>
                <Menu.Item >
                  <ButtonStyle2 
                    icon
                    onClick={this.toggleClick}
                    >
                    <Icon
                      name='align justify'
                      >
                    </Icon>
                  </ButtonStyle2>
                </Menu.Item>
                { this.handleDropdown() }
            <Link to='/'>
            { 
              this.state.show ?
              <LogoStyle src='https://s3.invisionapp-cdn.com/storage.invisionapp.com/boards/files/105142677.png?x-amz-meta-iv=6&x-amz-meta-ck=5a81039525e5126ffd527a9f9f49b565&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1556668800&Signature=2xhb01VaI25UViJMvJqZZeMcdyA%3D' />
              :
              <LogoStyle src='https://s3.invisionapp-cdn.com/storage.invisionapp.com/boards/files/105142674.png?x-amz-meta-iv=6&x-amz-meta-ck=5a81039525e5126ffd527a9f9f49b565&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1556668800&Signature=WtADJjHKLaiVmZh%2BIHmiw%2FjnJPw%3D' />
            }
            </Link>
            </Menu.Menu>
          </MenuMobile>
        </MenuStyles>
      </>
    )
  }
}

const WebLogoStyle= styled(Image)`
  height: 5em
  ${media.phone`
    display: none !important
  `}
`

const LogoStyle = styled(Image)`
  display: none !important

  ${media.phone`
    display: flex !important
    width: 75%
    height: auto
    z-index: 2
  `}
`
const MenuStyles = styled(Menu)`
  position: relative !important
  z-index: 1 !important
`
const MenuMobile = styled(Menu)`
  display: none !important

  ${media.phone`
    display: flex !important
    background: transparent !important
    border: none !important
    box-shadow: none !important
    width: 100%
  `}
`
const MenuWeb = styled(Menu.Menu)`
  display: flex
  background: transparent !important

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
const ButtonStyle = styled(Button)`
  margin-right: 1em !important
  margin-left: .5em !important
  transform: translate(0, 1em) !important
`
const ButtonStyle2 = styled(Button)`
  z-index: 2 !important
`
const MenuItemStyle = styled(Menu.Item)`
  width: 100%
  text-align: left
`

const Mobile = styled(Menu.Menu)`
  position: absolute !important
  background: #53407A
  font-size: 1.35em !important
  padding-top: 5em !important
  padding-left: 1em !important
  width: 100%
  opacity: .85
  height: 25em !important
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