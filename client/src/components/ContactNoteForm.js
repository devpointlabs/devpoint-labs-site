import React from 'react'
import axios from 'axios';

class ContactNoteFrom extends React.Component {
    state = { contacts: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        comments: "",
        notes: "",
        course: "",
        location: ""
    }}

    componentDidMount() {
        const { match: {params: {id} } } = this.props
        if (id)
        axios.get(`api/contacts/${id}`)
            .then(res =>  { this.setState({
                firstname: res.data.firstname,
                lastname: res.data.lastname,
                email: res.data.email,
                phone: res.data.phone,
                comments: res.data.comments,
                notes: res.data.notes,
                course: res.data.course,
                location: res.data.location
            })
        })
        .catch(err => {
            console.log(err.response)
        })
    }


    handelSubmit() {
        e.preventDefault()
        const contact = {...this.state}
        const { match: { params: {id} }, history: {push} } = this.props
        if 
    }
}