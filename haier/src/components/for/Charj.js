import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../style/Charj.scss';
class InpUI extends Component {
	componentDidMount() {
		
	}
	render(){
		return(
			<div>
				<div className="selectionOnePixelBorder">
					<div className="selectionSelected">
						<span>综合</span>
						<img src="http://cdn09.ehaier.com/shunguang/H5/www/img/comprehensive_white.png"/>
					</div>
					<div className="selectionSelected">销量</div>
					<div className="selectionSelected">
						<span>价格</span>
						<img src="http://cdn09.ehaier.com/shunguang/H5/www/img/arrow_state_0.png"/>
					</div>
					<div className="selectionSelected">
						<span>筛选</span>
						<img src="http://cdn09.ehaier.com/shunguang/H5/www/img/filter_state_0.png"/>
					</div>
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
const Inp = connect(mapStateToProps, mapDispatchToProps)(InpUI);

export default Inp;