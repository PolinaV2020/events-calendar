import React from 'react';
import {Routes, Route, Navigate, Outlet} from 'react-router-dom';
import {HomePage} from '../pages/HomePage/HomePage';
import {Login} from '../pages/Login/Login';
import {Event} from '../pages/Event/Event';
import {AppLayout} from '../components/Layout/AppLayout';
import {RequireAuth} from '../hoc/RequireAuth';

export interface Route {
    path?: string,
    element?: React.ReactElement | null,
}


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route index element={<HomePage />} />
                <Route path="event" element={
                    <RequireAuth>
                        <Event />
                    </RequireAuth>
                    } />
                <Route path="login" element={<Login/>} />
                <Route path="*" element={<Navigate to="login" replace/>} />
            </Route>
        </Routes>
    );
};



