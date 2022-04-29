import React, {FC} from 'react';
import {Outlet} from 'react-router-dom';
import {Layout} from 'antd';
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
