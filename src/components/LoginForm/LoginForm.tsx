import React, {FC, useState} from 'react';
import {Form, Input, Button} from 'antd';
import {rules} from '../../utils/rules';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';

export const LoginForm: FC = () => {
    const {login} = useActions();

    const {error, isLoading} = useTypedSelector((state) => state.auth);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onFinish = () => {
        login(username, password);
    };

    return (
        <Form onFinish={onFinish}>
            {error && <div style={{color: 'red'}}>{error}</div>}
            <Form.Item label="Username" name="username" rules={[rules.required('Please input your username!')]}>
                <Input value={username} onChange={(event) => setUsername(event.target.value)} />
            </Form.Item>

            <Form.Item label="Password" name="password" rules={[rules.required('Please input your password!')]}>
                <Input.Password value={password} onChange={(event) => setPassword(event.target.value)} />
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
