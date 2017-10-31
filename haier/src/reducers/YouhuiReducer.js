const YouhuiReducer = (state=[], action)=>{
	switch(action.type) {
		case 'YOUHUI_DATA':
			console.log(action.payload);
			return action.payload
		default:
			return state;
	}
}

export default YouhuiReducer;