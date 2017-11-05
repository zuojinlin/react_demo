const FilmsReducer = (state={swiperImgs:[],product:{}}, action)=>{
	switch(action.type) {
		case 'GET_FILMS':
			console.log(action.payload);
			return action.payload
		default:
			return state;
	}
}

export default FilmsReducer;