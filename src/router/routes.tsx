import React from 'react';
import {Login} from '../pages/Login/Login';
import {Event} from '../pages/Event/Event';

export interface Route {
    path: string,
    element: React.ComponentType,
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/'
}

export const publicRoutes: Route[] = [
    {path: RouteNames.LOGIN, element: Login}
]

export const privateRoutes: Route[] = [
    {path: RouteNames.EVENT, element: Event}
]


