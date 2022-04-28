import React, {FC, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../../store/index';
import {AppRoutes} from '../../router/routes';
import {useActions} from '../../hooks/useActions';
import {User} from "../../models/User";
import './App.css';

const App:FC = () => {
  const {setIsAuth, setUser} = useActions();

  useEffect(() => {
   if(localStorage.getItem("auth")) {
     setUser({username: localStorage.getItem("username" || "")} as User);
     setIsAuth(true);
   };
  }, []);

  return (
     <Provider store={store}>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
      </Provider>
  );
}

export default App;