import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
class ClassifyUI extends Component {
	componentDidMount(){
		
	}
	render () {
		return (
			<div id = "classify">
				
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
		list:state.list
	}
}

const mapDisatchToProps = (dispatch)=>{
	return{
		getData:function(){
			
		}
	}
}

const Classify = connect(mapStateToProps, mapDisatchToProps)(ClassifyUI);


export default Classify;
