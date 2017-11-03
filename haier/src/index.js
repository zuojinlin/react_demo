import React from 'react';
import ReactDOM from 'react-dom';
import Foot from './router/footer1';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import{Provider} from 'react-redux';
import StrollReducer from './reducers/StrollReducer';
import EntryReducer from './reducers/EntryReducer';
import GuangkeRedecer from './reducers/GuangkeRedecer';
import YouhuiReducer from './reducers/YouhuiReducer';
import ZhutiReducer from './reducers/ZhutiReducer';
import LikeReducer from './reducers/LikeReducer';
import LiebiaoReducer from './reducers/LiebiaoReducer';



import FenleiReducer from './reducers/FenleiReducer';

const reducers = combineReducers({
	list:StrollReducer,
	list1:EntryReducer,
	list2:GuangkeRedecer,
	list3:YouhuiReducer,
	list4:ZhutiReducer,
	list5:LikeReducer,
	list6:LiebiaoReducer,
	fenlei:FenleiReducer
})
const store = createStore(reducers, {list:[]})


function renderPage(){
	ReactDOM.render(<Provider store = {store}><Foot /></Provider>, document.getElementById('foot'));
}

renderPage();
store.subscribe(renderPage);
registerServiceWorker();

