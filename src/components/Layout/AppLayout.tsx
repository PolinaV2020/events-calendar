import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import {Layout, Row, Menu} from 'antd';
import {AppHeader} from '../Header/AppHeader';

export const AppLayout: FC = () => {
    return (
        <Layout>
            <Layout.Header>
                <AppHeader />
            </Layout.Header>
            <Layout.Content>
                <Outlet />
            </Layout.Content>
        </Layout>
    );
};


