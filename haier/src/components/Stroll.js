import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Swiper from './Swiper';
import Entry from './Entry';
import Gong from './Gong';
import Picfor from './Picfor';
import Guangke from './Guangke';
class StrollUI extends Component {
	componentDidMount(){

	}
	render () {
		return (
			<div id = "stroll">
				<Swiper/>
				<Entry/>
				<Gong/>
				<Picfor/>
				<Guangke/>
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
