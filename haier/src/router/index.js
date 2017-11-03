import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Fenlei from '../components/Fenlei';
import Detail from '../components/Detail';
const Rout = () => (
  <Router>
    <div>

      <Route path="/main" component={Fenlei}/>
      <Route path="/detail" component={Detail}/>
    </div>
  </Router>
)
export default Rout