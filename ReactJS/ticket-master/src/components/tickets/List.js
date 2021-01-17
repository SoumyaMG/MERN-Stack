import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class TicketList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tickets: []
        }
    }

    componentDidMount() {
        axios.get('http://dct-ticket-master.herokuapp.com/tickets', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const tickets = response.data
                this.setState(() => ({ tickets }))
            })
    }
    render() {
        return (
            <div>
                <h2>Listing Tickets</h2>
                <table border="border">
                    <thead>
                        <tr>
                            <th>Ticket_Id</th>
                            <th>Customer_Name</th>
                            <th>Preority</th>
                            <th>Department</th>
                            <th>Employee</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tickets.map((ticket) => {
                                return (<tr key={ticket._id}>
                                    <td>{ticket._id}</td>
                                    <td>{ticket.customer}</td>
                                    <td>{ticket.preority}</td>
                                    <td>{ticket.department}</td>
                                    <td>{ticket.employee}</td>
                                    <td>{ticket.status}</td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <h4><Link to="/tickets/new">Add Ticket</Link></h4>
            </div>
        )
    }
}

export default TicketList