import React from 'react'
import axios from 'axios'


class TicketForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: [],
            customer: props.isEdit ? props.ticket.customer : '',
            priority: props.isEdit ? props.ticket.priority : '',
            message: props.isEdit ? props.ticket.message : '',
            departments: [],
            department: props.isEdit ? props.ticket.department : '',
            employees: [],
            employee: props.isEdit ? props.ticket.employee : '',
            status: props.isEdit ? props.ticket.status : 'inCompleted'
        }
        this.handleCutomerChange = this.handleCutomerChange.bind(this)
        this.handleMessageChange = this.handleMessageChange.bind(this)
        this.handlePriorityChange = this.handlePriorityChange.bind(this)
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this)
        this.handleEmployeeChange = this.handleEmployeeChange.bind(this)
        this.handleStatusChange = this.handleStatusChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            customer: this.state.customer,
            message: this.state.message,
            priority: this.state.priority,
            department: this.state.department,
            employee: this.state.employee,
            status: this.state.status
        }

        this.props.handleSubmit(formData)
    }

    handleCutomerChange(e) {
        const customer = e.target.value
        this.setState(() => ({ customer }))
    }

    handleMessageChange(e) {
        const message = e.target.value
        this.setState(() => ({ message }))
    }

    handlePriorityChange(e) {
        const priority = e.target.value
        this.setState(() => ({ priority }))
    }

    handleDepartmentChange(e) {
        const department = e.target.value
        this.setState(() => ({ department }))
        console.log(department)
        axios.get('http://dct-ticket-master.herokuapp.com/employees', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response) => {
                const emps = response.data
                const employees = emps.filter((employee) => {
                    return employee.department = department
                })
                this.setState(() => ({ employees }))
            })

    }

    handleEmployeeChange(e) {
        const employee = e.target.value
        this.setState(() => ({ employee }))
    }

    handleStatusChange(e) {
        const status = e.target.value
        this.setState(() => ({ status }))
    }


    componentDidMount() {
        axios.get('http://dct-ticket-master.herokuapp.com/customers', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const customers = response.data
                this.setState(() => ({ customers }))
            })

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
                <form onSubmiht={this.andleSubmit}>
                    Customer:<select value={this.state.customer} onChange={this.handleCutomerChange}>
                        <option value='ec'>selt</option>
                        {
                            this.state.customers.map((customer) => {
                                return (
                                    <option key={customer._id} value={customer._id}>{customer.name}</option>
                                )
                            })
                        }
                    </select><br />  <br />
                    message: <textarea value={this.state.message} onChange={this.handleMessageChange}></textarea>
                    <br /> <br />
                    Preority:
                    <input type="radio" onChange={this.handlePriorityChange} value="high" name="priority" />High
                    <input type="radio" onChange={this.handlePriorityChange} value="medium" name="priority" />Medium
                    <input type="radio" onChange={this.handlePriorityChange} value="low" name="priority" />Low
                    <br /> <br />
                    Department:<select value={this.state.department} onChange={this.handleDepartmentChange}>
                        <option value=''>select</option>
                        {
                            this.state.departments.map((department) => {
                                return (
                                    this.state.departments.map((department) => {
                                        return <option value={department._id} key={department._id}>{department.name}</option>
                                    })
                                )
                            })
                        }
                    </select><br />
                    <br />
                    Employee:<select value={this.state.employee} onChange={this.handleEmployeeChange}>
                        <option value=''>select</option>
                        {
                            this.state.employees.map((employee) => {
                                return (
                                    <option key={employee._id} value={employee._id}>{employee.name}</option>
                                )
                            })
                        }
                    </select><br /> <br />

                    status:<input type="checkbox" onChange={this.handleStatusChange} value={this.state.status} />
                    <br /> <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default TicketForm