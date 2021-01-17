import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.isEdit ? props.employee.name : '',
            email: props.isEdit ? props.employee.email : '',
            mobile: props.isEdit ? props.employee.mobile : '',
            department: props.isEdit ? props.employee.department : '',
            departments: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleMobileChange = this.handleMobileChange.bind(this)
        this.handleDeptChange = this.handleDeptChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()

        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            department: this.state.department
        }

        this.props.handleSubmit(formData)
    }

    handleNameChange(e) {
        const name = e.target.value
        this.setState(() => ({ name }))
    }

    handleEmailChange(e) {
        const email = e.target.value
        this.setState(() => ({ email }))
    }

    handleMobileChange(e) {
        const mobile = e.target.value
        this.setState(() => ({ mobile }))
    }

    handleDeptChange(e) {
        const department = e.target.value
        this.setState(() => ({ department }))
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
                <fieldset>
                    <legend>Fill the Customer Form</legend>
                    <br /><br />
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                        </label><br /><br />
                        <label>
                            Email:
                        <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
                        </label><br /><br />
                        <label>
                            Mobile:
                        <input type="text" value={this.state.mobile} onChange={this.handleMobileChange} />
                        </label><br /><br />
                        <label>
                            Department:
                        <select value={this.state.department} onChange={this.handleDeptChange}>
                                <option value=''>select</option>
                                {
                                    this.state.departments.map(function (department) {
                                        return <option value={department._id} key={department._id}>{department.name}</option>
                                    })
                                }
                            </select>
                        </label><br /><br />
                        <input type="submit" /> or <Link to="/employees">back</Link>
                    </form>
                </fieldset>
            </div>
        )
    }
}

export default EmployeeForm