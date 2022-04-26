import React, {FC} from 'react';
import {useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {Row, Menu} from 'antd';
import {AuthActionCreators} from '../../store/reducers/Auth/action-creators';
import {useTypedSelector} from '../../hooks/useTypedSelector';

export const AppHeader: FC = () => {
  const dispatch = useDispatch();
  const {isAuth, user} = useTypedSelector(state => state.auth)

  return (
     <Row justify="end">
          {isAuth ? (
              <>
                <div style={{color: 'white', marginRight: "30px"}}>{user.username}</div>
                <Menu mode="horizontal" theme="dark" selectable={false}>
                    <Menu.Item key={1}>
                        <NavLink to="/">Home page</NavLink>
                    </Menu.Item>
                    <Menu.Item key={2}>
                        <NavLink to="/event">Event</NavLink>
                    </Menu.Item>
                    <Menu.Item key={3}>
                        <NavLink to="/login">Log out</NavLink>
                    </Menu.Item>
                </Menu>
                </>
              ) : (
                <Menu mode="horizontal" theme="dark" selectable={false}>
                     <Menu.Item key={1} onClick={() => dispatch(AuthActionCreators.logout())}>
                         <NavLink to="/login">Log in</NavLink>
                     </Menu.Item>
                </Menu>
            )}
      </Row>
  );
};