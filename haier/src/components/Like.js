import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/Like.scss';
import { Carousel, WhiteSpace } from 'antd-mobile';


class LikeUI extends Component {
	componentDidMount() {
		this.props.getData()
	}
	render() {
		return (
			<div className="guess_interesting">
				<div className="gi_top">
					<span className="f_left"></span>
					<span className="f_cen">猜你喜欢</span>
					<span className="f_right"></span>
				</div>
				<div className="lcj-like">
					{this.props.list5.map((item, index)=>{
						return <div className="like_th" key={item.pos}>
								<img src={item.defaultImageUrl}/>
								<div className="ng-binding">
									{item.productFullName}
								</div>
								<div className="price">
									￥ {item.saleGuidePrice}
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
		list5:state.list5
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getData: function(){
				var that = this;
			    axios.get("/v3/mstore/loadFindProductsNew.html?d=1&provinceId=7&cityId=75&districtId=1185&streetId=12026780&storeId=20219251&noLoading=true")
			    .then(function(res){
			    	console.log(res.data.queryPricePara.products)
			        dispatch({
			        type: "LIKE_DATA",
			        payload:res.data.queryPricePara.products
			      })
			})
		}
	}
}

const Like = connect(mapStateToProps, mapDispatchToProps)(LikeUI);


export default Like;