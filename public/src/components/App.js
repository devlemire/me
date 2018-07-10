import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

class App extends Component {
  componentDidMount = async () => {
    const { data } = await axios.get('/api/test')
    this.setState({ apiResponse: data })
  }

  state = {
    apiResponse: null
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <p>API Response: {this.state.apiResponse}</p>
      </div>
    )
  }
}

export default App
