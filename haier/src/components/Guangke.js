import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/Guangke.scss';

class GuangkeUI extends Component {
	componentDidMount() {
		this.props.getData()
	}
	render() {
		return (
			<div className="sg_judge">
				<div className="judge_top">
					<span className="p_left"></span>
					<span className="p_cen">逛客怎么说</span>
					<span className="p_right"></span>
				</div>
				<div className="judge_more">
					<span>更多</span>
					<img src="http://cdn09.ehaier.com/shunguang/H5/www/img/toSeeMore@2x.png"/>
				</div>
				<div className="judge_content">
					{this.props.list2.map((item, index) =>{
							return	<div key={item.id} className="aa">
										<img src={item.pic}/>
										<div>{item.title}</div>
									</div>
							
					})}
				</div>
				<div className="judge_footer">
					{this.props.list2.map((item, index) =>{
							return	<div key={item.id} className="bb">
										<div className="b-a">
											<img src={item.avatar}/>
											<div>{item.storeName}</div>
										</div>
										<div className="b-b">
											<img src="http://cdn09.ehaier.com/shunguang/H5/www/img/follow@2x.png"/>
										</div>
									</div>							
					})}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
		list2:state.list2
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getData: function(){
				var that = this;
			    axios.get("/sg/cms/indexTop.json")
			    .then(function(res){
			    	console.log(res.data.data.midCommList)
			        dispatch({
			        type: "GUANGKE_DATA",
			        payload:res.data.data.midCommList
			      })
			})
		}
	}
}

const Guangke = connect(mapStateToProps, mapDispatchToProps)(GuangkeUI);


export default Guangke;