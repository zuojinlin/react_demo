import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Stroll from '../components/Stroll';
import Classify from '../components/Classify';
import Cart from '../components/Cart';
import Mine from '../components/Mine';
import '../style/footer.scss';



class App extends Component {
  componentDidMount(){
    this.tab_color()
  }
  tab_color(e){
    
  }
  render(){
    return (
        <Router>
        <div>
          <div className="bar bar-footer">
            
            <div className="tabs tabs-icon-top bg-white border border-bottom-none border-left-right-none">
              <Link to="/stroll" onClick={this.tab_color.bind(this)} className="tab-item tab-on">
                <img className="padding-3 icon" src="http://cdn09.ehaier.com/shunguang/H5/www/img/tab_ic_home_hover.png"/>
                逛逛
              </Link>
              <Link to="/classify" onClick={this.tab_color.bind(this)} className="tab-item tab-off">
                <img className="padding-3 icon" src="http://cdn09.ehaier.com/shunguang/H5/www/img/ic_shop_cart_gray.png"/>
                分类
              </Link>
              <Link to="/cart" onClick={this.tab_color.bind(this)} className="tab-item tab-off">
                <img className="padding-3 icon" src="http://cdn09.ehaier.com/shunguang/H5/www/img/ic_shop_cart_gray.png"/>
                购物车
              </Link>
              <Link to="/mine" onClick={this.tab_color.bind(this)} className="tab-item tab-off">
                <img className="padding-3 icon" src="http://cdn09.ehaier.com/shunguang/H5/www/img/tab_ic_user.png"/>
                我的
              </Link>
            </div>
          </div>
          <Route exact path="/stroll" component={Stroll}/>
            <Route path="/classify" component={Classify}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/mine" component={Mine}/>
            </div>
        </Router>
      
      )
  }
} 
export default App