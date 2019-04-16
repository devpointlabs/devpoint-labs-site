import React from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom'


class SubscribersView extends React.Component {
    state = { subscriber: {} }

    componentDidMount() { 

        const { id } = this.props.match.params
        axios.get(`/api/subscribers/${id}`)
            .then( res => this.setState({ subscriber: res.data }))
    }

    render() {
        const { subscriber } = this.state
        return (
            <div>
                { subscriber.email }
            </div>
        )
    }
}


export default withRouter(SubscribersView)