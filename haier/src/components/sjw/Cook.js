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
class Cook extends Component {
	constructor(){
		super();
		this.state = {
			tit_2:[],
			title_4:[]
		}
	}
	componentDidMount(){
		axios.get("/sg/cms/navigation/getNavigations.json?parentId=809&timer=1509538755100")
			.then((res)=>{
				this.state.tit_2 = res.data.data
				this.state.title_4 = res.data.data
				console.log(this.state.tit)
				this.setState({
					title_4:this.state.title_4.slice(1,8),
					tit_2:this.state.tit_2
				})
				
			}).catch((error)=>{
				console.log("ERROR")
			})
	}
	render() {
		var fri = this.state.title_4.map((item, index)=>{
			if(index!=2 && index!=3 && index!=4 && index!=5){
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
						<img src="http://cdn22.ehaier.com/file/59df03560b04911929594619.png" />
						<img src="http://cdn21.ehaier.com/file/59df13740b04911929594622.png" />
						<img src="http://cdn21.ehaier.com/file/59df04cc69252db8b8fe845c.png" />
					</Carousel>
				</div>
				
				<ul className="a_side">{fri}</ul>
				<div className="list_3">
					<p className="titled">{this.state.tit_2[8] ? this.state.tit_2[8].navigationName : ""}</p>
					<ul className="a_side1">
						<li>
							<img src={this.state.tit_2[3] ? this.state.tit_2[3].imageUrl : ""} />
							<p>{this.state.tit_2[3] ? this.state.tit_2[3].navigationName : ""}</p>
						</li>
						<li>
							<img src={this.state.tit_2[9] ? this.state.tit_2[9].imageUrl : ""} />
							<p>{this.state.tit_2[9] ? this.state.tit_2[9].navigationName : ""}</p>
						</li>
						<li>
							<img src={this.state.tit_2[12] ? this.state.tit_2[12].imageUrl : ""} />
							<p>{this.state.tit_2[12] ? this.state.tit_2[12].navigationName : ""}</p>
						</li>
					</ul>
				</div>
				<div className="list_3">
					<p className="titled">{this.state.tit_2[14] ? this.state.tit_2[14].navigationName : ""}</p>
					<ul className="a_side1">
						<li>
							<img src={this.state.tit_2[4] ? this.state.tit_2[4].imageUrl : ""} />
							<p>{this.state.tit_2[4] ? this.state.tit_2[4].navigationName : ""}</p>
						</li>
						<li>
							<img src={this.state.tit_2[5] ? this.state.tit_2[5].imageUrl : ""} />
							<p>{this.state.tit_2[5] ? this.state.tit_2[5].navigationName : ""}</p>
						</li>
						<li>
							<img src={this.state.tit_2[10] ? this.state.tit_2[10].imageUrl : ""} />
							<p>{this.state.tit_2[10] ? this.state.tit_2[10].navigationName : ""}</p>
						</li>
					</ul>
				</div>
			</div>	
		)
	}
}

export default Cook;





