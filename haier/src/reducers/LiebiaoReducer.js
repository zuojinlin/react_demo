const LIEBIAOReducer = (state=[], action)=>{
	switch(action.type) {
		case 'LIEBIAO_DATA':
			console.log(action.payload);
			return action.payload
		default:
			return state;
	}
}

export default LIEBIAOReducer;