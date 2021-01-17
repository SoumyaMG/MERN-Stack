import React from 'react'
import axios from 'axios'

import DepartmentForm from './Form'

class DepartmentNew extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData) {
        axios.post('http://dct-ticket-master.herokuapp.com/departments', formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data)
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {
                    this.props.history.push('/departments')
                }
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return (
            <div>
                <h2>Add New Department</h2>
                <DepartmentForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default DepartmentNew