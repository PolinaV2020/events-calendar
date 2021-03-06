import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {HomePage} from '../pages/HomePage/HomePage';
import {Login} from '../pages/Login/Login';
import {Events} from '../pages/Events/Events';
import {AppLayout} from '../components/Layout/AppLayout';
import {RequireAuth} from '../hoc/RequireAuth';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route
                    index
                    element={
                        <RequireAuth>
                            <HomePage />
                        </RequireAuth>
                    }
                />
                <Route
                    path="event"
                    element={
                        <RequireAuth>
                            <Events />
                        </RequireAuth>
                    }
                />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<Navigate to="login" replace />} />
            </Route>
        </Routes>
    );
};
