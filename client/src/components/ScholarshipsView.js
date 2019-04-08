import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class ScholarshipsView extends React.Component {
    state = { scholarship: {} }

    componentDidMount() {
        const { id } = this.props.match.params
        axios.get(`/api/scholarships/${id}`)
            .then( res => this.setState({ scholarship: res.data }))
    }

    render () {
        const { first_name } = this.state.scholarship
        return (
            <div>
                { first_name }
            </div>
        )

    }
}

export default withRouter(ScholarshipsView)