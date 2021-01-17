import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import CustomerList from './components/customers/List'
import CustomerShow from './components/customers/Show'
import CustomerNew from './components/customers/New'
import CustomerEdit from './components/customers/Edit'

import DepartmentList from './components/departments/List'
import DepartmentShow from './components/departments/Show'
import DepartmentNew from './components/departments/New'
import DepartmentEdit from './components/departments/Edit'

import EmployeeList from './components/employees/List'
import EmployeeShow from './components/employees/Show'
import EmployeeNew from './components/employees/New'
import EmployeeEdit from './components/employees/Edit'

import TicketList from './components/tickets/List'
import TicketNew from './components/tickets/New'
import TicketEdit from './components/tickets/Edit'

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <h2>Welcome To Ticket-Master App</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/customers">Customers</Link></li>
                        <li><Link to="/departments">Departments</Link></li>
                        <li><Link to="/employees">Employees</Link></li>
                        <li><Link to="/tickets">Tickets</Link></li>

                    </ul>
                    <Switch>
                        <Route path="/customers" component={CustomerList} exact={true} />
                        <Route path="/customers/new" component={CustomerNew} />
                        <Route path="/customers/edit/:id" component={CustomerEdit} />
                        <Route path="/customers/:id" component={CustomerShow} />


                        <Route path="/departments" component={DepartmentList} exact={true} />
                        <Route path="/departments/new" component={DepartmentNew} />
                        <Route path="/departments/edit/:id" component={DepartmentEdit} />
                        <Route path="/departments/:id" component={DepartmentShow} />

                        <Route path="/employees" component={EmployeeList} exact={true} />
                        <Route path="/employees/new" component={EmployeeNew} />
                        <Route path="/employees/edit/:id" component={EmployeeEdit} />
                        <Route path="/employees/:id" component={EmployeeShow} />

                        <Route path="/tickets" component={TicketList} exact={true} />
                        <Route path="/tickets/new" component={TicketNew} />
                        <Route path="/tickets/edit/:id" component={TicketEdit} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App