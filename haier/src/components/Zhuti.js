import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/Zhuti.scss';
import { Carousel, WhiteSpace } from 'antd-mobile';


class ZhutiUI extends Component {
	componentDidMount() {
		this.props.getData()
	}
	render() {
		return (
			<div className="fav_recommond">
				<div className="fr__top">
					<span className="f_left"></span>
					<span className="f_cen">{this.props.oc}</span>
					<span className="f_right"></span>
				</div>
				<div className="tf_middle">
					<div>
						<Carousel  autoplay={true}>
							{this.props.list4.midBannerList.map((item, index)=>{
									return <img key={item.id} src = {item.pic}/>
							})}
						</Carousel>
					</div>
					<div className="tf_footer">
						{this.props.list4.crowdFunding.map((item, index)=>{
								return <img key={item.id} src = {item.pic}/>
						})}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
		list4:state.list4
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getData: function(){
				var that = this;
			    axios.get("/sg/cms/indexTop.json")
			    .then(function(res){
			    	console.log(res.data.data)
			        dispatch({
			        type: "ZHUTIUI_DATA",
			        payload:res.data.data
			      })
			})
		}
	}
}

const Zhuti = connect(mapStateToProps, mapDispatchToProps)(ZhutiUI);


export default Zhuti;