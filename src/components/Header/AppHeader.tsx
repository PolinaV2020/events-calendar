import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import {Row, Menu} from 'antd';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';

export const AppHeader: FC = () => {
    const {logout} = useActions();
    const {isAuth, user} = useTypedSelector((state) => state.auth);

    return (
        <Row justify="end">
            {isAuth ? (
                <>
                    <div style={{color: 'white', marginRight: '30px'}}>{user.username}</div>
                    <Menu mode="horizontal" theme="dark" selectable={false}>
                        <Menu.Item key={1}>
                            <NavLink to="/">Home page</NavLink>
                        </Menu.Item>
                        <Menu.Item key={2}>
                            <NavLink to="/event">Events</NavLink>
                        </Menu.Item>
                        <Menu.Item key={3}>
                            <NavLink to="/login">Log out</NavLink>
                        </Menu.Item>
                    </Menu>
                </>
            ) : (
                <Menu mode="horizontal" theme="dark" selectable={false}>
                    <Menu.Item key={1} onClick={logout}>
                        <NavLink to="/login">Log in</NavLink>
                    </Menu.Item>
                </Menu>
            )}
        </Row>
    );
};
