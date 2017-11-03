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
class Tv extends Component {
	constructor(){
		super();
		this.state = {
			tit_1:[],
			title_4:[]
		}
	}
	componentDidMount(){
		axios.get("/sg/cms/navigation/getNavigations.json?parentId=931&timer=1509536614768")
			.then((res)=>{
				this.state.tit_1 = res.data.data
				this.state.title_4 = res.data.data
				// console.log(res.data.data)
				this.setState({
					title_4:this.state.title_4.slice(1,8),
					tit_1:this.state.tit_1
				})
				
			}).catch((error)=>{
				console.log("ERROR")
			})
	}
	render() {
		var tv = this.state.title_4.map((item, index)=>{
			if(index!=2 && index!=4 && index!=5){
				return <li key={item.id}>
					<Link to="/detail"><img src={item.imageUrl} /></Link>
					<p>{item.navigationName}</p>
				   </li>
			}
		})
		return(
			<div className="swip">
				<div className="banner">
					<Carousel>
						<img src="http://cdn22.ehaier.com/file/59df055069252db8b8fe845f.png" />
						<img src="http://cdn22.ehaier.com/file/59df057469252db8b8fe8465.png" />
						<img src="http://cdn22.ehaier.com/file/59df058b0b0491192959461f.png" />
					</Carousel>
				</div>
				
				<ul className="a_side">{tv}</ul>
				<div className="list_3">
					<p className="titled">{this.state.tit_1[8] ? this.state.tit_1[8].navigationName : ""}</p>
					<ul className="a_side1">
						<li>
							<img src={this.state.tit_1[3] ? this.state.tit_1[3].imageUrl : ""} />
							<p>{this.state.tit_1[3] ? this.state.tit_1[3].navigationName : ""}</p>
						</li>
						<li>
							<img src={this.state.tit_1[5] ? this.state.tit_1[5].imageUrl : ""} />
							<p>{this.state.tit_1[5] ? this.state.tit_1[5].navigationName : ""}</p>
						</li>
						<li>
							<img src={this.state.tit_1[9] ? this.state.tit_1[9].imageUrl : ""} />
							<p>{this.state.tit_1[9] ? this.state.tit_1[9].navigationName : ""}</p>
						</li>
					</ul>
				</div>
			</div>	
		)
	}
}

export default Tv;





