import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../../store/index';
import {Layout} from '../Layout/Layout';

function App() {
  return (
     <Provider store={store}>
        <BrowserRouter>
         <main>
              <Layout />
          </main>
        </BrowserRouter>
      </Provider>
  );
}

export default App;