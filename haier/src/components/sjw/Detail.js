import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import detail from '../../style/detail.scss';
class Detail extends Component {
	constructor(){
		super();
		this.state = {
			detail_4k:[],
		}
	}
	componentDidMount(){
		axios.get("/v3/mstore/commonLoadItemNew.html?pholder=1&provinceId=16&cityId=173&districtId=2450&streetId=12036596&pageIndex=1&pageSize=5&productCateId=2929&filterData=isHotDesc&fromType=1&noLoading=true&memberId=undefined")
			.then((res)=>{
				this.state.detail_4k = res.data.data.productList
				console.log(res.data.data.productList)
				this.setState({
					detail_4k:this.state.detail_4k
				})
				
			}).catch((error)=>{
				console.log("ERROR")
			})
	}
	render() {
		var d_4k = this.state.detail_4k.map((item, index)=>{
				return <li key={item.productId}>
						<div className="details">
							<img src={item.defaultImageUrl} />
						</div>
						<div className="d_word">
							<p>{item.productFirstName}</p>
							<p>{item.productSecondName}</p>
							<p>{item.productTitle}</p>
							<p>￥{item.saleGuidePrice}</p>
							<p>{item.hasStock}</p>
						</div>
				  	   </li>
		})
		return(
			<div className="detail">
				
				<ul className="detail_list">{d_4k}</ul>

			</div>	
		)
	}
}

export default Detail;





