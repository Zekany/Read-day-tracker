import React from 'react'
import {render} from 'react-dom'
import routes from './routes'
import './stylesheets/ui.scss'
import './stylesheets/index.scss'

window.React = React

render(
  routes,
  document.getElementById('react-container')
)

// For possible future refactoring with react-router-dom:
/*
import { HashRouter, Route } from 'react-router-dom'

window.React = React

render(
  <HashRouter>
    <div>
      <Route path='/' component={App} />
      //<Route path='*' component={Whoops404} />
    </div>
  </HashRouter>,
  document.getElementById('react-container')
)
*/
