import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button, Icon, Header, Container } from "semantic-ui-react";
import wallpaper from "../../assets/images/qbkls.png";

class Subscribers extends React.Component {
  state = { subscribers: [] };

  componentDidMount() {
    axios
      .get("/api/subscribers")
      .then(res => this.setState({ subscribers: res.data }));
  }

  handleDelete(id) {
    axios.delete(`/api/subscribers/${id}`).then(res => {
      const { subscribers } = this.state;
      this.setState({ subscribers: subscribers.filter(t => t.id !== id) });
    });
  }

  render() {
    const { subscribers } = this.state;
    return (
      <>
        <div
          style={{
            background: `url(${wallpaper})`,
            positon: "absolute",
            height: "100%",
            paddingBottom: "45em"
          }}
        >
          <Container>
            <Header>Subscribers</Header>
            <Table celled padded>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Delete Contact</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {subscribers.map(subscriber => (
                  <Table.Row key={subscriber.id}>
                    <Table.Cell>{subscriber.email}</Table.Cell>
                    <Table.Cell width={1} centered>
                      <div style={{ textAlign: "center" }}>
                        <Icon
                          name="trash"
                          color="red"
                          onClick={() => this.handleDelete(subscriber.id)}
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

export default Subscribers;
