import React from 'react';
import ReactDOM from 'react-dom';
import Foot from './router/footer1';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import{Provider} from 'react-redux';
import StrollReducer from './reducers/StrollReducer';
import EntryReducer from './reducers/EntryReducer';
import GuangkeRedecer from './reducers/GuangkeRedecer';

const recuders = combineReducers({
	list:StrollReducer,
	list1:EntryReducer,
	list2:GuangkeRedecer
})
const store = createStore(recuders, {list:[]})


function renderPage(){
	ReactDOM.render(<Provider store = {store}><Foot /></Provider>, document.getElementById('foot'));
}

renderPage();
store.subscribe(renderPage);
registerServiceWorker();

