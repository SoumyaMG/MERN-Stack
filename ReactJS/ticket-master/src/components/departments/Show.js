import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class DepartmentShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            department: {}
        }
        this.handleRemove = this.handleRemove.bind(this)
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://dct-ticket-master.herokuapp.com/departments/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const department = response.data
                this.setState(() => ({ department }))
            })
    }

    handleRemove() {
        const confirmRemove = window.confirm("Are you Sure???")
        if (confirmRemove) {
            axios.delete(`http://dct-ticket-master.herokuapp.com/departments/${this.state.department._id}`, {
                headers: {
                    'x-auth': localStorage.getItem('token')
                }
            })
                .then(response => {
                    this.props.history.push("/departments")
                })
        }
    }


    render() {
        console.log(this.state.department)
        return (
            <div>
                <h2>Its a Department</h2>
                <p>Id : {this.state.department._id}</p>
                <p>Name : {this.state.department.name}</p>
                <br /><br />
                <p><Link to={`/departments/edit/${this.state.department._id}`}>Edit</Link></p>
                <button onClick={this.handleRemove}>remove</button>
            </div>
        )
    }
}

export default DepartmentShow