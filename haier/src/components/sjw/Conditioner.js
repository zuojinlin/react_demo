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
class conditioner extends Component {
	constructor(){
		super();
		this.state = {
			title_2:[]
		}
	}
	componentDidMount(){
		axios.get("/sg/cms/navigation/getNavigations.json?parentId=1226&timer=1509517229775")
			.then((res)=>{
				this.state.title_2 = res.data.data
				// console.log(this.state.title_2)
				this.setState({
					title_2:this.state.title_2.slice(1,16)
				})
				
			}).catch((error)=>{
				console.log("ERROR")
			})
	}
	render() {
		var condi = this.state.title_2.map((item, index)=>{
			if(index!==4 && index!==9 && index!==5 && index!==6 && index!==11 && index!==10){
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
						<img src="http://cdn21.ehaier.com/file/59df6f2f69252db8b8fe84b9.png" />
						<img src="http://cdn22.ehaier.com/file/59df6f7a69252db8b8fe84bf.png" />
						<img src="http://cdn21.ehaier.com/file/59df6f5569252db8b8fe84bc.png" />
					</Carousel>
				</div>
				
				<ul className="a_side">{condi}</ul>
			</div>	
		)
	}
}

export default conditioner;





