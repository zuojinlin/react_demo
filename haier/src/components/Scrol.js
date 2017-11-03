import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../style/Scrol.scss';
class ScrolUI extends Component {
	componentDidMount() {
		
	}
	render(){
		return(
			<div className="scroll">
				<div className="text-align-c">
					<img className="width-60" src="http://cdn09.ehaier.com/shunguang/H5/www/img/basket.png"/>
					<h4 className="font-bold margin-top-0">您的购物车暂无商品</h4>
					<div className="color-text-l">马上去挑选您钟情的商品吧</div>
				</div>
			</div>
			)
	}
}
const mapStateToProps = (state)=>{
	return {
		list: state.list
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getData: function(){
		}
	}
}
const Scrol = connect(mapStateToProps, mapDispatchToProps)(ScrolUI);

export default Scrol;