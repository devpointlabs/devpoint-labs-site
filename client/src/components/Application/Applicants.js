import React from "react";
import axios from "axios";
import { Table, Header, Container, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import wallpaper from "../../assets/images/qbkls.png";

class Applicants extends React.Component {
  state = { applications: [] };

  componentDidMount() {
    axios
      .get("/api/applications")
      .then(res => this.setState({ applications: res.data }));
  }

  handleDelete = id => {
    axios.delete(`/api/applications/${id}`).then(res => {
      const { applications } = this.state;
      this.setState({ applications: applications.filter(t => t.id !== id) });
    });
  };

  render() {
    const { applications } = this.state;
    return (
      <>
        <div
          style={{
            background: `url(${wallpaper})`,
            positon: "absolute",
            height: "100%",
            paddingBottom: "30em"
          }}
        >
          <Container>
            <br />
            <Header>DevPoint Labs Applications</Header>
            <Table celled style={{ position: "relative", marginBottom: "5em" }}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>First Name</Table.HeaderCell>
                  <Table.HeaderCell>Last Name</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Phone Number</Table.HeaderCell>
                  <Table.HeaderCell>Course</Table.HeaderCell>
                  <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {applications.map(application => (
                  <Table.Row key={application.id}>
                    <Link to={`/applications/${application.id}`}>
                      <Table.Cell>{application.first_name}</Table.Cell>
                    </Link>
                    <Table.Cell>{application.last_name}</Table.Cell>
                    <Table.Cell>{application.email}</Table.Cell>
                    <Table.Cell>{application.phone_number}</Table.Cell>
                    <Table.Cell>{application.course}</Table.Cell>
                    <Table.Cell>
                      <div style={{ textAlign: "center" }}>
                        <Icon
                          name="trash"
                          textAlign="center"
                          onClick={() => this.handleDelete(application.id)}
                          color="red"
                        />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Container>
        </div>
      </>
    );
  }
}

export default Applicants;
