import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class DetailsUI extends Component {
	componentDidMount(){
		this.props.getData();
	}
	render() {
		return (
			<div id="details">
				{this.props.list.map((item, index)=>{
					return <div id = {item.id}></div>
				})}
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return {
		list: state.fenlei
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getData: function(){
			axios.get("/sg/cms/navigation/getNavigations.json?parentId=0&timer=1509341575519")
			.then((res)=>{
				console.log(res)
				dispatch({
					type: "FENLEI_GET_DATA",
					payload: res.data.data
				})
			})
		}
	}
}

const Details = connect(mapStateToProps, mapDispatchToProps)(DetailsUI);
export default Details;