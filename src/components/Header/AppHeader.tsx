import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import {Row, Menu} from 'antd';

export const AppHeader: FC = () => {
  const auth = false;

  return (
     <Row justify="end">
          {auth ? (
              <>
                <div style={{color: 'white', marginRight: "30px"}}>Polina</div>
                <Menu mode="horizontal" theme="dark" selectable={false}>
                    <Menu.Item key={1}>
                        <NavLink to="/">Home page</NavLink>
                    </Menu.Item>
                    <Menu.Item key={2}>
                        <NavLink to="/event">Event</NavLink>
                    </Menu.Item>
                    <Menu.Item key={3}>
                        <NavLink to="/login">Logout</NavLink>
                    </Menu.Item>
                </Menu>
                </>
              ) : (
                  <>
                    <div style={{color: 'white', marginRight: "30px"}}>Polina</div>
                    <Menu mode="horizontal" theme="dark" selectable={false}>
                        <Menu.Item key={1}>
                            <NavLink to="/login">Login</NavLink>
                        </Menu.Item>
                    </Menu>
                </>
            )}
      </Row>
  );
};