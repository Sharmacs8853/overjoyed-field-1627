// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
>>>>>>> 328a0d59045cd2e6a493da791a716f28dc03c37f


import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';





import { Provider } from 'react-redux';
import {store} from "./Redux/store"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <BrowserRouter>
   <ChakraProvider>
    <App />
    </ChakraProvider>
  </BrowserRouter>
=======


    <Provider store={store}>
      <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
      </BrowserRouter>
    </Provider>
>>>>>>> 328a0d59045cd2e6a493da791a716f28dc03c37f

);


