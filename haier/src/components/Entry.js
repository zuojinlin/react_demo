import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/Entry.scss';
import {
  NavLink
} from 'react-router-dom'

class EntryUI extends Component {
	componentDidMount() {

	}
	render() {
		return (
			<div className="type_entry_box">
				<div className="flex">
					<div className="type_entry">
						<NavLink exact to="/dianqi">
							<img src="http://cdn09.ehaier.com/shunguang/H5/www/img/jydq@2x.png"/>
							<div>家用电器</div>
						</NavLink>	
					</div>
					<div className="type_entry">
						<img src="http://cdn09.ehaier.com/shunguang/H5/www/img/Fitting@2x.png"/>
						<div>家居家装</div>
					</div>
					<div className="type_entry">
						<img src="http://cdn09.ehaier.com/shunguang/H5/www/img/market@2x.png"/>
						<div>百货超市</div>
					</div>
					<div className="type_entry">
						<img src="http://cdn09.ehaier.com/shunguang/H5/www/img/shfw@2x.png"/>
						<div>生活服务</div>
					</div>
				</div>
				<div className="flex">
					<div className="type_entry">
						<img src="http://cdn09.ehaier.com/shunguang/H5/www/img/openStore@2x.png"/>
						<div>我要开店</div>
					</div>
					<div className="type_entry">
						<img src="http://cdn09.ehaier.com/shunguang/H5/www/img/jrlc@2x.png"/>
						<div>金融理财</div>
					</div>
					<div className="type_entry">
						<img src="http://cdn09.ehaier.com/shunguang/H5/www/img/new@2x.png"/>
						<div>新品众筹</div>
					</div>
					<div className="type_entry">
						<img src="http://cdn09.ehaier.com/shunguang/H5/www/img/gd@2x.png"/>
						<div>更多</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
		list:state.list
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		
	}
}

const Entry = connect(mapStateToProps, mapDispatchToProps)(EntryUI);


export default Entry;