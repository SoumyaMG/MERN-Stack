import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class EmployeeShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employee: {}
        }
        this.handleRemove = this.handleRemove.bind(this)
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://dct-ticket-master.herokuapp.com/employees/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const employee = response.data
                this.setState(() => ({ employee }))
            })
    }

    handleRemove() {
        const confirmRemove = window.confirm("Are you Sure???")
        if (confirmRemove) {
            axios.delete(`http://dct-ticket-master.herokuapp.com/employees/${this.state.employee._id}`, {
                headers: {
                    'x-auth': localStorage.getItem('token')
                }
            })
                .then(response => {
                    this.props.history.push("/employees")
                })
        }
    }


    render() {
        return (
            <div>
                <h2>Its a Employee</h2>
                <p>Id : {this.state.employee._id}</p>
                <p>Name : {this.state.employee.name}</p>
                <p>Email : {this.state.employee.email}</p>
                <p>Mobile: {this.state.employee.mobile}</p>
                <p>Department:{this.state.employee.department}</p>
                <br /><br />
                <p><Link to={`/employees/edit/${this.state.employee._id}`}>Edit</Link></p>
                <button onClick={this.handleRemove}>remove</button>
            </div>
        )
    }
}

export default EmployeeShow