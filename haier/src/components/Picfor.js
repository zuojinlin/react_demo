import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/Picfor.scss';


class PicforUI extends Component {
	componentDidMount() {
	}
	render() {
		return (
			<div className="Picfor">
				<img src="http://cdn21.ehaier.com/file/59b00c4d00cbc39a3080ecbe.png@400_200"/>
				<img src="http://cdn22.ehaier.com/file/59b00c3b00cbc39a3080ecbb.png@400_200"/>
				<img src="http://cdn21.ehaier.com/file/59af947a00cbc39a3080eb37.png@400_200"/>
				<img src="http://cdn21.ehaier.com/file/59af945800cbc39a3080eb31.png@400_200"/>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return{

	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		
	}
}

const Picfor = connect(mapStateToProps, mapDispatchToProps)(PicforUI);


export default Picfor;