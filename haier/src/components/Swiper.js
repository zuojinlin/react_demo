import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/Swiper.scss';
// import Carousel from 'nuka-carousel';
// import { Carousel, WhiteSpace } from 'antd-mobile';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
// import { Button } from 'antd-mobile';
// var Slider = require('react-slick');
// import Slider from 'react-slick';
 
class SliderUI extends Component {
	componentWillMount(){
		this.props.getData()
	}
  render () {
    	
    return (    	
			    <div className="swiper">
					<div className="need-left-right-margin">
					    <Carousel
					      className="my-carousel" autoplay={true} infinite={true}>
	 				{this.props.list.map((item, index) => (
	        			<a href="#" key={item.id}><img src={item.pic} /></a>
	      			))}
					    </Carousel>
	  				</div>	
				</div>
    );
  }
}
 
const mapStateToProps = (state)=>{
	return{
		list:state.list
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
			        type: "SWIPE_DATA",
			        payload:res.data.data.topBannerList
			      })
			})
		}
	}
}

const Swipe = connect(mapStateToProps, mapDispatchToProps)(SliderUI);


export default Swipe;