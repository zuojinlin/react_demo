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
					<span className="f_cen">主题特色</span>
					<span className="f_right"></span>
				</div>
				<div className="lcj-like">
					{this.props.list5.map((item, index)=>{
						return <div></div>
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
				
			
		}
	}
}

const Like = connect(mapStateToProps, mapDispatchToProps)(LikeUI);


export default Like;