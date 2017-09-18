import React from 'react'
import {Router, Route} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import IndexPage from '../components/IndexPage'
import Loading from '../components/Loading'

import 'antd/dist/antd.css'
import './App.css'

const browserHistory = createBrowserHistory();

const App = () =>
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={IndexPage}/>
      <Route path="/load" component={Loading}/>
    </div>
  </Router>

export default App
