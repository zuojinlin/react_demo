const YouhuiReducer = (state={midBannerList:[],crowdFunding:[]}, action)=>{
	switch(action.type) {
		case 'ZHUTIUI_DATA':
			console.log(action.payload);
			return action.payload
		default:
			return state;
	}
}

export default YouhuiReducer;