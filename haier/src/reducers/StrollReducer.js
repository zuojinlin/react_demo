const StrollReducer = (state=[], action)=>{
	switch(action.type) {
		case 'SWIPE_DATA':
			console.log(action.payload);
			return action.payload
		default:
			return state;
	}
}

export default StrollReducer;