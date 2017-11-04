import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router} from 'react-router-dom';

import Header from './components/shared/Header.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
      <Header />
    </Router>
  , document.getElementById('root'));
registerServiceWorker();
