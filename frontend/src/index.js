import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
</BrowserRouter>
=======
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import {store} from "./Redux/store"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
     </Provider>


>>>>>>> b9fdb12d1ac4a9918dec3ef533aa532cc24f49de
);

