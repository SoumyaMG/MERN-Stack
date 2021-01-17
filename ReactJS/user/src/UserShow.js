import React from 'react'
import axios from 'axios';

class UserShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            complete: [],
            InComplete: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
            .then(response => {
                const todos = response.data
                const complete = todos.filter(function (n) {
                    return n.completed === true
                })
                const InComplete = todos.filter(function (n) {
                    return n.completed === false
                })
                this.setState(() => ({
                    complete,
                    InComplete
                }))
            })
    }

    render() {
        return (
            <div>
                <h2>Total Completed TODOS {this.state.complete.length}</h2>
                <table border="border">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>title</td>
                            <td>status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.complete.map(function (com) {
                                return (
                                    <tr key={com.id}>
                                        <td>{com.id}</td>
                                        <td>{com.title}</td>
                                        <td>completed</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <br />
                <br />

                <h2>Total InCompleted TODOS {this.state.InComplete.length}</h2>
                <table border="border">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>title</td>
                            <td>status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.InComplete.map(function (inCom) {
                                return (
                                    <tr key={inCom.id}>
                                        <td>{inCom.id}</td>
                                        <td>{inCom.title}</td>
                                        <td>Incompleted</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div >
        )
    }
}

export default UserShow