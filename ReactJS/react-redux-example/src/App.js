import React from 'react';
import Counter from './components/counter'
import User from './components/users'
import AddUser from './components/addUser'
import Winner from './components/winner'
import { connect } from 'react-redux'

function App(props) {
  return (
    <div>
      <h2>Counter - React + Redux Example </h2>
      <h2>App - {props.count}</h2>
      <Counter />
      <User />
      <AddUser />
      <Winner />
    </div>
  );
}

// export default App;
const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
export default connect(mapStateToProps)(App)