const EntryReducer = (state=[], action)=>{
	switch(action.type) {
		case 'GONG_DATA':
			return action.payload
		default:
			return state;
	}
}

export default EntryReducer;