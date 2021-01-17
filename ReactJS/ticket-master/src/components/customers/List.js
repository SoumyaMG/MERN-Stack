import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class CustomerList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: []
        }
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
    }
    render() {
        return (
            <div>
                <h2>Listing Customer</h2>
                <ul>
                    {
                        this.state.customers.map(function (customer) {
                            return <li key={customer._id}><Link to={`/customers/${customer._id}`}>{customer.name}</Link></li>
                        })
                    }
                </ul>
                <h4><Link to="/customers/new">Add Customer</Link></h4>
            </div>
        )
    }
}

export default CustomerList