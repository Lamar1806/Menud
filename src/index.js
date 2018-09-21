import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Branch from 'branch-sdk';

Branch.init('key_test_dot1hV9cHJWEwC6f5DjeAhfhCFktFcbT', function(err, data) {
    console.log('branch initialized');
    ReactDOM.render(<App branchData={data}/>, document.getElementById('root'));
}); 
    
registerServiceWorker();