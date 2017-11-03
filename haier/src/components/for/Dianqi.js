import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Swiper from '../Swiper';
import Youhui from '../Youhui';
import Zhuti from '../Zhuti';
import Liebiao from './Liebiao';
import Inp from '../inp';

class DianqiUI extends Component {
	componentDidMount(){

	}
	render () {
		return (
			<div id = "dianqi">
				<Inp/>
				<Swiper/>
				<Youhui oc="热门活动"/>
				<Zhuti oc="爆款推荐"/>
				<Liebiao/>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return{

	}
}

const mapDisatchToProps = (dispatch)=>{
	return{
		
	}
}

const Dianqi = connect(mapStateToProps, mapDisatchToProps)(DianqiUI);


export default Dianqi;
