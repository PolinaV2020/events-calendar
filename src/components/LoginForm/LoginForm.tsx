import React, {FC, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Form, Input, Button} from 'antd';
import {rules} from '../../utils/rules';
import {AuthActionCreators} from '../../store/reducers/Auth/action-creators';
import {useTypedSelector} from '../../hooks/useTypedSelector';

export const LoginForm: FC = () => {
  const dispatch = useDispatch();

  const {error, isLoading} = useTypedSelector(state => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onFinish = () => {
    dispatch(AuthActionCreators.login(username, password));
  }

  return (
    <Form
      onFinish={onFinish}
    >
    {error && <div style={{color: 'red'}}>{error}</div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <Input value={username} onChange={(event) => setUsername(event.target.value)}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required('Please input your password!')]}
      >
        <Input.Password value={password} onChange={(event) => setPassword(event.target.value)}/>
      </Form.Item>
      
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};