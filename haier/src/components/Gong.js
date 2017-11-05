import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/Gong.scss';

class GongUI extends Component {
	componentDidMount() {
		this.props.getData()
	}
	render() {
		return (
			<div className="gong">
				<div className="sg_notice">
					<div className="sg_notice_title">
						<img src="http://cdn09.ehaier.com/shunguang/H5/www/img/affiche@2x.png"/>
					</div>
        			<div className="sg_notice_content">
        				1111元返现引爆11·11开门红
        			</div>
        		</div>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
		list1:state.list1
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getData: function(){
				var that = this;
			    axios.get("/v3/mstore/sg/msgCenter.html")
			    .then(function(res){
			    	console.log(res.data.data.list)
			        dispatch({
			        type: "GONG_DATA",
			        payload:res.data.data.list
			      })
			})
		}
	}
}

const Gong = connect(mapStateToProps, mapDispatchToProps)(GongUI);


export default Gong;