import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import Landing from './components/Landing'
import Blog from './components/Blog'

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/blog" component={Blog} />
  </Switch>
)
