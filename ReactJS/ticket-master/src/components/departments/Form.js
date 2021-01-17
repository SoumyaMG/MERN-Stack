import React from 'react'
import { Link } from 'react-router-dom'

class DepartmentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.isEdit ? props.department.name : '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()

        const formData = {
            name: this.state.name
        }

        this.props.handleSubmit(formData)
    }

    handleNameChange(e) {
        const name = e.target.value
        this.setState(() => ({ name }))
    }

    render() {
        return (
            <div>
                <fieldset>
                    <legend>Fill the Department Form</legend>
                    <br /><br />
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                        </label><br /><br />
                        <input type="submit" /> or <Link to="/departments">back</Link>
                    </form>
                </fieldset>
            </div>
        )
    }
}

export default DepartmentForm