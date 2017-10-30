const StrollReducer = (state=[], action)=>{
	switch(action.type) {
		case 'GUANGKE_DATA':
			console.log(action.payload);
			return action.payload
		default:
			return state;
	}
}

export default StrollReducer;