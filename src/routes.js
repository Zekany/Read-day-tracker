import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import {App} from './components/App'
import { Whoops404 } from './components/Whoops404'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='list-days' component={App}>
      <Route path=':filter' component={App} />
    </Route>
    <Route path='add-day' component={App} />
    <Route path='*' component={Whoops404} />
  </Router>
)

export default routes
