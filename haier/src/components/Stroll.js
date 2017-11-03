import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Swiper from './Swiper';
import Entry from './Entry';
import Gong from './Gong';
import Picfor from './Picfor';
import Guangke from './Guangke';
import Youhui from './Youhui';
import Zhuti from './Zhuti';
import Like from './Like';
import Inp from './inp';
class StrollUI extends Component {
	componentDidMount(){

	}
	render () {
		return (
			<div id = "stroll">
				<Inp/>
				<Swiper/>
				<Entry/>
				<Gong/>
				<Picfor/>
				<Guangke/>
				<Youhui oc="优惠推荐"/>
				<Zhuti oc="主题特色"/>
				<Like/>
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

const Stroll = connect(mapStateToProps, mapDisatchToProps)(StrollUI);


export default Stroll;
