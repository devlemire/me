import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import router from '../router'

// Components
import Header from './Header'

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
        <Header />
        <section id="page-content">{router}</section>
      </div>
    )
  }
}

export default App
