import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/Youhui.scss';
import { Carousel, WhiteSpace } from 'antd-mobile';


class YouhuiUI extends Component {
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
				<div className="fav_pic">
					<Carousel  autoplay={true} infinite={true}>
		 				{this.props.list3.map((item, index) => {
		 						return 	<div key= {item[0].id} className="img_sw">
						        				<a href="#">
						        					<img className="img_l" src={item[0].pic} />
						        					<img className="img_t" src={item[1].pic} />
						        					<img className="img_b" src={item[2].pic} />
						        				</a>
					        				</div>	
			 								
					        			

		 				})}
	 				</Carousel>
	  			</div>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
		list3:state.list3
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getData: function(){
				var that = this;
			    axios.get("/sg/cms/indexTop.json")
			    .then(function(res){
			    	console.log(res.data.data.midActivtyList)
			        dispatch({
			        type: "YOUHUI_DATA",
			        payload:res.data.data.midActivtyList
			      })
			})
		}
	}
}

const Youhui = connect(mapStateToProps, mapDispatchToProps)(YouhuiUI);


export default Youhui;