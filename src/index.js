import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Hello from './components/hello';

// create a variable of the component: name -> props, new instance of Hello class.
const root = <Hello name="Pikos" />;
// render the variable:
ReactDOM.render(root, document.getElementById('root'));

serviceWorker.unregister();
