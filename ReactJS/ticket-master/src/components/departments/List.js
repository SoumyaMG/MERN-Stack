import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class DepartmentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            departments: []
        }
    }

    componentDidMount() {
        axios.get('http://dct-ticket-master.herokuapp.com/departments', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const departments = response.data
                this.setState(() => ({ departments }))
            })
    }
    render() {
        return (
            <div>
                <h2>Listing Departments</h2>
                <ul>
                    {
                        this.state.departments.map(function (department) {
                            return <li key={department._id}><Link to={`/departments/${department._id}`}>{department.name}</Link></li>
                        })
                    }
                </ul>
                <h4><Link to="/departments/new">Add Department</Link></h4>
            </div>

        )
    }
}

export default DepartmentList