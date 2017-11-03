import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Fenleis from '../../style/Fenlei.scss';
import Aside from '../../style/Aside.scss';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// import { Carousel, WhiteSpace } from 'antd-mobile';
import Conditioner from './Conditioner';
import Fridge from './Fridge';
import Tv from './Tv';
import Cook from './Cook';
import Live from './Live';

import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import Inp from '../inp';
class Fen_leis extends Component {
	constructor(){
		super();
		this.state = {
			pic:"",
			title:[]
		}
	}
	componentDidMount(){
		axios.get("/sg/cms/navigation/getNavigations.json?parentId=1183&timer=1509445168202")
			.then((res)=>{
				this.state.pic = res.data.data[0].imageUrl;
				this.state.title = res.data.data
				// console.log(this.state.title.slice(1,10))
				this.setState({
					pic:this.state.pic,
					title:this.state.title.slice(1,10)
				})
				
			}).catch((error)=>{
				console.log("ERROR")
			})
	}
	render() {
		var items = this.state.title.map((item, index)=>{
			return <li key={item.id}>
					<img src={item.imageUrl} />
					<p>{item.navigationName}</p>
				   </li>
		})
		return(
			<div className="swip">
				<Carousel auto>
					<div className="banner">
						<img src={this.state.pic} />
					</div>
				</Carousel>
				<ul className="a_side">{items}</ul>
			</div>	
		)
	}
}

const Classify = () => (
  <Router>
  <div>
  	<Inp/>
    <div id="fenlei">
      <ul className="list">
        <li><Link to="/main">推荐分类</Link></li>
        <li><Link to="/main/con">空洗电器</Link></li>
        <li><Link to="/main/fri">冰冷电器</Link></li>
        <li><Link to="/main/tv">电视影音</Link></li>
        <li><Link to="/cook">厨热电器</Link></li>
        <li><Link to="/live">生活家电</Link></li>
        <li><Link to="/">数码</Link></li>
        <li><Link to="/">百货超市</Link></li>
        <li><Link to="/">运动户外</Link></li>
        <li><Link to="/">汽车配件</Link></li>
        <li><Link to="/">服装饰品</Link></li>
        <li><Link to="/">卡通手办</Link></li>
        <li><Link to="/">家居家装</Link></li>
        <li><Link to="/">生活服务</Link></li>
        <li><Link to="/">医药保健</Link></li>
        <li><Link to="/">母婴用品</Link></li>
      </ul>
      <div className="aside">
      	<Route exact path="/main" component={Fen_leis}/>

      	<Route exact path="/main/con" component={Conditioner}/>
      	<Route exact path="/main/fri" component={Fridge}/>
      	<Route exact path="/main/tv" component={Tv}/>
      	<Route exact path="/cook" component={Cook}/>
      	<Route exact path="/live" component={Live}/>
      	
      </div>

    </div>
    </div>
  </Router>
)
export default Classify