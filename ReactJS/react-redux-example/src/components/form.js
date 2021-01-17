import React from 'react'
import { incrementBy, decrementBy } from '../action/count'
import { connect } from 'react-redux'

class CountForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countValue: '',
            operation: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRadioChange = this.handleRadioChange.bind(this)
    }

    handleChange(e) {
        const value = e.target.value
        this.setState(() => ({
            countValue: value
        }))
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state.operation)
        if (this.state.operation === 'increment') {
            this.props.dispatch(incrementBy(this.state.countValue))
            this.setState({ countValue: '' })
        }
        else {
            this.props.dispatch(decrementBy(this.state.countValue))
            this.setState({ countValue: '' })
        }
    }

    handleRadioChange(e) {
        const value = e.target.value
        this.setState(() => ({
            operation: value
        }))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="enter number" value={this.state.countValue} onChange={this.handleChange} />
                    <br />
                    <input type="radio" name="count" value="increment" onChange={this.handleRadioChange} />Increment
                    <input type="radio" name="count" value="decrement" onChange={this.handleRadioChange} />Decrement
                    <br />
                    <input type="submit" />
                </form>
            </div >
        )
    }
}

export default connect()(CountForm)