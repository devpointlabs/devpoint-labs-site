import React from 'react';
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Form, Grid, Image, Container, Divider, Header, Button, Segment } from 'semantic-ui-react';
import styled from 'styled-components'
import Dropzone from 'react-dropzone'
import { Link } from 'react-router-dom'

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

class Profile extends React.Component {
  state = { editing: false, formValues: { name: '', email: '', file: '', }, };
  
  componentDidMount() {
    const { auth: { user: { name, email, }, }, } = this.props;
    this.setState({ formValues: { name, email, }, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { formValues: { name, email, file, }, } = this.state;
    const { auth: { user, updateUser, }, } = this.props;
    updateUser(user.id, { name, email, file, });
    this.setState({
      editing: false,
      formValues: {
        ...this.state.formValues,
        file: "",
      },
    });
  }
  
  toggleEdit = () => {
    this.setState( state => {
      return { editing: !state.editing, };
    })
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value,
      }
    })
  }
  
  profileView = () => {
    const { auth: { user }, } = this.props;
    return (
      <Segment raised >
        <Image centered style={{ borderRadius: "50%"}} src={user.image || defaultImage} size="medium" />
        <Header textAlign="center" as="h1">
          <Header.Content>{user.name}</Header.Content>
          <br />
          <Header.Content>{user.email}</Header.Content>
          <Header.Subheader>{user.nickname}</Header.Subheader>
        </Header>
    </Segment>
    )
  }

  onDrop = (files) => {
    this.setState({ formValues: { ...this.state.formValues, file: files[0], } });
  }
  
  editView = () => {
    // const { auth: { user }, } = this.props;
    const { formValues: { name, email, } } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Grid.Column width={4}>
          <Dropzone
            onDrop={this.onDrop}
            multiple={false}
          >
            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <div
                  {...getRootProps()}
                  style={styles.dropzone}
                >
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p>Drop files here...</p> :
                      <p>Try dropping some files here, or click to select files to upload.</p>
                  }
                </div>
              )
            }}
          </Dropzone>
        </Grid.Column>
        <Grid.Column width={8}>
          <Form.Input
            label="Name"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            name="email"
            value={email}
            required
            onChange={this.handleChange}
          />
          <Button>Update</Button>
        </Grid.Column>
      </Form>
    )
  }
  
  render() {
    const { editing, } = this.state;
    return (
      <Container style={{ justifyContent: "center"}}>
        <Divider hidden />
        <Grid>
          <Grid.Column textAlign="center">
            { editing ? this.editView() : this.profileView()}
              <Button onClick={this.toggleEdit}>{editing ? 'Cancel' : 'Edit Profile'}</Button>
          </Grid.Column>
        </Grid>
        <Button href="/EditCourses">Update Courses</Button>
          <Link to='/AboutDPLEdit'>
        <Button>
          Edit About Page
        </Button>
        </Link>
      </Container>
    )
  }
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { auth => 
      <Profile { ...props } auth={auth} />
    }
  </AuthConsumer>
)

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}

const ButtonStyle = styled(Button)`
  color: white;
  font-weight: 400;
  position: absolute;
  text-align: center;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default ConnectedProfile;