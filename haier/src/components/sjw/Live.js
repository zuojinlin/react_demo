import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Aside from '../../style/Aside.scss';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
class Live extends Component {
	constructor(){
		super();
		this.state = {
			tit_3:[],
			title_5:[]
		}
	}
	componentDidMount(){
		axios.get("/sg/cms/navigation/getNavigations.json?parentId=847&timer=1509539781628")
			.then((res)=>{
				this.state.tit_3 = res.data.data
				this.state.title_5 = res.data.data
				console.log(this.state.tit_3)
				this.setState({
					title_5:this.state.title_5.slice(0,7),
					tit_3:this.state.tit_3
				})
				
			}).catch((error)=>{
				console.log("ERROR")
			})
	}
	render() {
		var live = this.state.title_5.map((item, index)=>{
			if(index!=2 && index!=4 && index!=5){
				return <li key={item.id}>
					<img src={item.imageUrl} />
					<p>{item.navigationName}</p>
				   </li>
			}
		})
		return(
			<div className="swip">
				<ul className="a_side">{live}</ul>
				<div className="list_3">
					<p className="titled">{this.state.tit_3[7] ? this.state.tit_3[7].navigationName : ""}</p>
					<ul className="a_side1">
						<li>
							<img src={this.state.tit_3[2] ? this.state.tit_3[2].imageUrl : ""} />
							<p>{this.state.tit_3[2] ? this.state.tit_3[2].navigationName : ""}</p>
						</li>
						<li>
							<img src={this.state.tit_3[8] ? this.state.tit_3[8].imageUrl : ""} />
							<p>{this.state.tit_3[8] ? this.state.tit_3[8].navigationName : ""}</p>
						</li>
						<li>
							<img src={this.state.tit_3[13] ? this.state.tit_3[13].imageUrl : ""} />
							<p>{this.state.tit_3[13] ? this.state.tit_3[13].navigationName : ""}</p>
						</li>
					</ul>
				</div>
				<div className="list_3">
					<p className="titled">{this.state.tit_3[14] ? this.state.tit_3[14].navigationName : ""}</p>
					<ul className="a_side1">
						<li>
							<img src={this.state.tit_3[9] ? this.state.tit_3[9].imageUrl : ""} />
							<p>{this.state.tit_3[9] ? this.state.tit_3[9].navigationName : ""}</p>
						</li>
						<li>
							<img src={this.state.tit_3[15] ? this.state.tit_3[15].imageUrl : ""} />
							<p>{this.state.tit_3[15] ? this.state.tit_3[15].navigationName : ""}</p>
						</li>
						<li>
							<img src={this.state.tit_3[10] ? this.state.tit_3[10].imageUrl : ""} />
							<p>{this.state.tit_3[10] ? this.state.tit_3[10].navigationName : ""}</p>
						</li>
					</ul>
				</div>
				<div className="list_3">
					<p className="titled">{this.state.tit_3[22] ? this.state.tit_3[22].navigationName : ""}</p>
					<ul className="a_side1">
						<li>
							<img src={this.state.tit_3[5] ? this.state.tit_3[5].imageUrl : ""} />
							<p>{this.state.tit_3[5] ? this.state.tit_3[5].navigationName : ""}</p>
						</li>
						<li>
							<img src={this.state.tit_3[11] ? this.state.tit_3[11].imageUrl : ""} />
							<p>{this.state.tit_3[11] ? this.state.tit_3[11].navigationName : ""}</p>
						</li>
					</ul>
				</div>
			</div>	
		)
	}
}

export default Live;





