import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducer/RootReducer'


/** Durch 'document.getElementById('root')'  hole ich mir div-element, was ersetzt werden soll.
 * Das bedeutet, dass ich auch in der index.html TAGs einführen / einfügen können, 
 * die dann immer bei allen Seiten der REACT-App entahlten sind, bswp.: links zu CSS-Dateien
  */

const store = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
