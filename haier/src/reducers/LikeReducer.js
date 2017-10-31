const LikeReducer = (state=[], action)=>{
	switch(action.type) {
		case 'LIKE_DATA':
			console.log(action.payload);
			return action.payload
		default:
			return state;
	}
}

export default LikeReducer;