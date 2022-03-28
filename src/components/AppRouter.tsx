import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../router/index';


export const AppRouter = () => {
    const auth = true;
    return (
        auth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={route.element} />
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={route.element} />
                )}
            </Routes>
    );
};