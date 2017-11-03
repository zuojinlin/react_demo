import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../style/Inp.scss';
class InpUI extends Component {
	componentDidMount() {
		
	}
	render(){
		return(
			<div>
				<div className="selection_top normalFixedTop">	
					<div className="address">
						<div className="ng-binding">软件园</div>
						<img src="http://cdn09.ehaier.com/shunguang/H5/www/img/location@2x.png"/>
					</div>
					<div className="search">
						<img src="http://cdn09.ehaier.com/shunguang/H5/www/img/searchIcon@2x.png"/>
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