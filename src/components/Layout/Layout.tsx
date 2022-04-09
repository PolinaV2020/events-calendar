import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {privateRoutes, publicRoutes, RouteNames} from '../../router/routes';

export const Layout = () => {
    const auth = false;
    return (
            <Routes>
                <Route path="*" element={<Navigate replace to={RouteNames.EVENT} />} />
                <Route path="*" element={<Navigate replace to={RouteNames.LOGIN}/>} />
            </Routes>
    );
};