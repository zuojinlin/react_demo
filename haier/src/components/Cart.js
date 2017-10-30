import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
class CartUI extends Component {
	componentDidMount(){
		this.props.getData();
	}
	render () {
		return (
			<div id = "cart">
				<ul>
					{this.props.list.map((item, index)=>{
						return <li key="item.id">{item.name}</li>;
					})}
				</ul>
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
			axios.get("/api/aaa")
			.then((res)=>{
				dispatch({
					type:"AAA",
					payload:res.data.aaa
				})
			})
		}
	}
}

const Cart = connect(mapStateToProps, mapDisatchToProps)(CartUI);


export default Cart;
