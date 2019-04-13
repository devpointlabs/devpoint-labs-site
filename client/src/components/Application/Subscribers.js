import React from 'react'
import axios from 'axios';
import { Table, Button, Icon } from 'semantic-ui-react'


class Subscribers extends React.Component {
    state={ subscribers: [] }


    componentDidMount() {
        axios.get('/api/subscribers')
            .then( res => this.setState({ subscribers: res.data }))
    }

    handleDelete (id) {
        axios.delete(`/api/subscribers/${id}`)
            .then( res => {
                const { subscribers } = this.state
                this.setState({ subscribers: subscribers.filter( t => t.id !==id )})
            })
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
                  <Table.Cell>
                  {subscriber.email}

                  </Table.Cell>
                  <Table.Cell>
                      <Button color='red' onClick={() => this.handleDelete(subscriber.id)} floated='right'>
                        <Icon name='trash' />
                      </Button>
                  </Table.Cell>
                </Table.Row>
               )}
              </Table.Body>
          </Table>

        )
    }
}

export default Subscribers 


{/* <Link to={`/subscribers/${subscriber.id}`}> */}