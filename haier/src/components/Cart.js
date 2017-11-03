import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Back from './Back';
import Scrol from './Scrol';
class CartUI extends Component {
	componentDidMount(){
		
	}
	render () {
		return (
			<div>
				<Back oc="购物车"/>
				<Scrol/>
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
		
	}
}

const Cart = connect(mapStateToProps, mapDisatchToProps)(CartUI);


export default Cart;
