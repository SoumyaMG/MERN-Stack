import React from 'react'
import { connect } from 'react-redux'

class Winner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            winner: {}
        }
    }

    render() {
        return (
            <div>
                <h3>{this.state.winner.name}</h3>

                <button onClick={() => {
                    const user = this.props.users[Math.floor(Math.random() * this.props.users.length)]
                    this.setState({ winner: user })
                }}>Show Winner</button>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect()(Winner)