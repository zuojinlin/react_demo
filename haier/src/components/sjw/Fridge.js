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
class Fridge extends Component {
	constructor(){
		super();
		this.state = {
			tit:[],
			title_3:[]
		}
	}
	componentDidMount(){
		axios.get("/sg/cms/navigation/getNavigations.json?parentId=1241&timer=1509519081132")
			.then((res)=>{
				this.state.tit = res.data.data
				this.state.title_3 = res.data.data
				console.log(this.state.tit)
				this.setState({
					title_3:this.state.title_3.slice(1,7),
					tit:this.state.tit
				})
				
			}).catch((error)=>{
				console.log("ERROR")
			})
	}
	render() {
		var fri = this.state.title_3.map((item, index)=>{
			if(index!=3 && index!=4){
				return <li key={item.id}>
					<img src={item.imageUrl} />
					<p>{item.navigationName}</p>
				   </li>
			}
		})
		return(
			<div className="swip">
				<div className="banner">
					<Carousel>
						<img src="http://cdn22.ehaier.com/file/59df6e0469252db8b8fe84b0.png" />
						<img src="http://cdn22.ehaier.com/file/59df6e2f69252db8b8fe84b3.png" />
						<img src="http://cdn21.ehaier.com/file/59df6e4c69252db8b8fe84b6.png" />
					</Carousel>
				</div>
				
				<ul className="a_side">{fri}</ul>
				<div className="list_3">
					<p className="titled">{this.state.tit[7] ? this.state.tit[7].navigationName : ""}</p>
					<ul className="a_side1">
						<li>
							<img src={this.state.tit[8] ? this.state.tit[8].imageUrl : ""} />
							<p>{this.state.tit[8] ? this.state.tit[8].navigationName : ""}</p>
						</li>
						<li>
							<img src={this.state.tit[3] ? this.state.tit[3].imageUrl : ""} />
							<p>{this.state.tit[3] ? this.state.tit[3].navigationName : ""}</p>
						</li>
						<li>
							<img src={this.state.tit[12] ? this.state.tit[12].imageUrl : ""} />
							<p>{this.state.tit[12] ? this.state.tit[12].navigationName : ""}</p>
						</li>
					</ul>
				</div>
				<div className="list_3">
					<p className="titled">{this.state.tit[13] ? this.state.tit[13].navigationName : ""}</p>
					<ul className="a_side1">
						<li>
							<img src={this.state.tit[4] ? this.state.tit[4].imageUrl : ""} />
							<p>{this.state.tit[4] ? this.state.tit[4].navigationName : ""}</p>
						</li>
						<li>
							<img src={this.state.tit[9] ? this.state.tit[9].imageUrl : ""} />
							<p>{this.state.tit[9] ? this.state.tit[9].navigationName : ""}</p>
						</li>
						<li>
							<img src={this.state.tit[14] ? this.state.tit[14].imageUrl : ""} />
							<p>{this.state.tit[14] ? this.state.tit[14].navigationName : ""}</p>
						</li>
					</ul>
				</div>
			</div>	
		)
	}
}

export default Fridge;





