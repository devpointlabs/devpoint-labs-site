import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'


class Subscribers extends React.Component {
    state={ subscribers: [] }


    componentDidMount() {
        axios.get('/api/subscribers')
            .then( res => this.setState({ subscribers: res.data }))
    }

    render() {
        const { subscribers } = this.state
        return (
            <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Email</Table.HeaderCell>
              </Table.Row>
              </Table.Header>
              <Table.Body>
                { subscribers.map(   subscriber =>
                <Table.Row  key={subscriber.id}>
                  <Link to={`/subscribers/${subscriber.id}`}>{subscriber.email}
                  <Table.Cell></Table.Cell>
                </Link>
                </Table.Row>
               )}
              </Table.Body>
          </Table>

        )
    }
}

export default Subscribers 