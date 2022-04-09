import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../router/routes';

export const AppRouter = () => {
    const auth = true;
    return (
            <Routes>
                {auth ?
                privateRoutes.map(route =>
                    <Route path={route.path} element={route.element} key={route.path}/>
                )
                :
                publicRoutes.map(route =>
                    <Route path={route.path} element={route.element} key={route.path}/>
                )
                }
            </Routes>
    );
};