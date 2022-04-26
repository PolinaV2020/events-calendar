import React, {FC} from 'react';
import {Layout, Row, Card} from 'antd';
import {LoginForm} from '../../components/LoginForm/LoginForm';
import styles from './styles.module.scss';

export const Login: FC = () => {
    return (
        <Layout>
            <Row justify="center" align="middle" className={styles.layout}>
                <Card>
                    <LoginForm />
                </Card>
            </Row>
        </Layout>
    );
};