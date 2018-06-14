import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore,combineReducers} from 'redux';

import {Provider} from 'react-redux';

const store= createStore(
    combineReducers({
        students: ()=>{return[
            {id: 1, name:'Anish',address:'Kathmandu'},
            {id: 2, name:'Bibek',address:'Lalitpur'},
        ]
    },
    selected:(state={},action) => {
        if(action.type==='SELECTED_STUD')
        {
            return action.payload
        }
        else{
            return {}
        }
        
    }
    })
);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
