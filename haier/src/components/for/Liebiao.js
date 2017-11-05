import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../../style/Liebiao.scss';
import { Carousel, WhiteSpace } from 'antd-mobile';
import Charj from './Charj';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

class LiebiaoUI extends Component {
	componentDidMount() {
		this.props.getData()
	}
	render() {
		var arr = ["冰箱","彩电","洗衣机","热水器","空调"]
		return (
			<div>
				<ul className="lie">
					{arr.map((item, index)=>{
						return <li key = {item} className="left">{item}</li>
					})}
				</ul>
				<Charj/>
				<div>
						{this.props.list6.map((item, index)=>{
							return	<div className="row" key={item + index}>
										<NavLink exact to={`/productDetail/${item.productId}/0/4/20219251/`} className="col">
											<div className="margin_bottom">
												<img src={item.defaultImageUrl}/>
											</div>
										</NavLink>
										<div className="col_r">
											<div>
												<span>{item.productFirstName}</span>
											</div>
											<span>{item.productSecondName}</span>
											<div>
												<div className="shenglue"><span>{item.productTitle}</span></div>
												<div><span>{item.defaultPrice}</span></div>
												<div><span>{item.hasStock}</span></div>
											</div>
										</div>	
									</div>
						})}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
		list6:state.list6
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getData: function(){
			    axios.get("/v3/mstore/commonLoadItemNew.html?pholder=1&provinceId=16&cityId=173&districtId=2450&streetId=12036596&pageIndex=1&pageSize=5&productCateId=2723&filterData=isHotDesc&fromType=1&noLoading=true&memberId=undefined")
			    .then(function(res){
			    	console.log(res.data.data.productList)
			        dispatch({
			        type: "LIEBIAO_DATA",
			        payload:res.data.data.productList
			      })
			})
		}
	}
}

const Liebiao = connect(mapStateToProps, mapDispatchToProps)(LiebiaoUI);


export default Liebiao;