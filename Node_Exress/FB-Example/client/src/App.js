import React from 'react';
import axios from './config/axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios.get('/students')
      .then((response) => {
        const students = response.data
        this.setState({ students })
      })
  }
  render() {
    return (
      <div>
        <h2>Hello React</h2>
        <ul>
          {
            this.state.students.map((student) => {
              return <li key={student.id}>{student.name}</li>
            })
          }
        </ul>

      </div>
    )
  }
}
export default App;
