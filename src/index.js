import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import quizApp from './reducers'
import Application from './Application';
import ResultPage from './ResultPage';
import './index.css';


let store = createStore(quizApp)
var tempState = store.getState()
if(tempState.solutions.inProgress){
	render(
		<Provider store={store}>
			<Application />
		</Provider>, 
		document.getElementById('root')
		);
}else{
	render(
		<Provider store={store}>
			<ResultPage/>
		</Provider>, 
		document.getElementById('root')
		);
}

registerServiceWorker();
