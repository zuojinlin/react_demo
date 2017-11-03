import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../style/Back.scss';
class BackUI extends Component {
	componentDidMount() {
		
	}
	render(){
		return(
			<div className="out">
			<div className="nav-bar-block">
				<div className="bar-stable bar bar-header">
					<button className="button back-button buttons button-clear header-item">&lt;</button>
					<div className="title title-center header-item">{this.props.oc}</div>
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
const Back = connect(mapStateToProps, mapDispatchToProps)(BackUI);

export default Back;