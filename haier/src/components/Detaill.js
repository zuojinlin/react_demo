import React, {Component} from 'react';
import {connect} from 'react-redux';
import Back from './Back';
import axios from 'axios';
import { Carousel } from 'antd';
import '../style/Detaill.scss';
class DetaillUI extends Component {
	componentDidMount() {
		this.props.getFilms();
	}
	render(){
		return(
			<div id="detaill">
				<Back oc="商品详情"/>
				<div className="mar_t">
					<div className="slick">
						<Carousel className="my-carousel" autoplay={true} infinite={true}>
			 				{this.props.list8.swiperImgs.map((item, index) => (
			        			<a href="#" key={item.cityId}><img className="sw_img" src={item}/></a>
			      			))}
						</Carousel>
						<div className="row bg-white disable-user-behavior">
							<div className="text-align-l color-text-l padding-top-10 padding-left-10 font-size-15 col col-80 position-r">
								<div className="ng-binding">{this.props.list8.product.productFullName}</div>
							</div>
							<div className="col col-20 text-align-r">
								<div>
									<ul>
										<li>
											<img className="li_img" src="http://cdn09.ehaier.com/shunguang/H5/www/img/ic_collection.png"/>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="text-align-l color-text-l padding-top-0 padding-left-right-15 font-size-14 bg-white">
							<span>{this.props.list8.product.productTitle}</span>
						</div>
						<div className="text-align-l color-text-l padding-left-15 padding-top-10 padding-bottom-10 font-size-14 bg-white">
							预付金：
							<span class="mmp">¥</span>
							<span className="mmp_b margin-right-20 ng-binding">{this.props.list8.actualPrice}</span>
						</div>
						<div className="text-align-l color-text-l padding-left-15 font-size-14 bg-white">
							<span class="mmp">¥</span>
							<span className="mmp_b margin-right-20 ng-binding">{this.props.list8.finalPrice}</span>
						</div>
						<div className="row bg-white padding-left-15 color-text-theme ng-binding">
							{this.props.list8.product.productActivityInfo}
						</div>
					</div>
				</div>
				<div className="row padding-0 btm">
					<div className="col col-10 padding-0 text-align-c">
						<ul>
							<li>
								<img className="kefu" src="http://cdn09.ehaier.com/shunguang/H5/www/img/ic_kf.png"/>
							</li>
							<li>客服</li>
						</ul>
					</div>
					<div className="col col-90 padding-0 wid-100">
						<div className="row padding-0 text-align-c font-size-14 color-text-white">
							<div className="col col-50 padding-top-15 h-50 gray">
								<span>加入购物车</span>
							</div>
							<div className="col col-50 bg-pink padding-top-15 h-50">
								<span>立即购买</span>
							</div>
						</div>
					</div>

				</div>
			</div>
			)
	}
}

function getData(dispatch) {
  axios.get("/v3/h5/purchase/13643.html?storeId=20219251&o2oType=0&fromUrl=undefined&fromType=4")
  .then((res)=>{
  	console.log(res.data.data)
    dispatch({
      type: "GET_FILMS",
      payload: res.data.data
    })
  })
}
const mapStateToProps = (state)=>{
	return {
		list8:state.list8
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getFilms: ()=>{
	      getData(dispatch)
	    }
	}
}
const Detaill = connect(mapStateToProps, mapDispatchToProps)(DetaillUI);

export default Detaill;