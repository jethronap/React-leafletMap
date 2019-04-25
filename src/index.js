import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Hello from './components/hello';

ReactDOM.render(<Hello />, document.getElementById('root'));

serviceWorker.unregister();
