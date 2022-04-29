import React, {FC} from 'react';
import {Row, Form, Select, DatePicker, Input, Button} from 'antd';
import {rules} from '../../utils/rules';

export const EventForm: FC = () => {
    return (
        <Form>
            <Form.Item label="Description" name="description" rules={[rules.required()]}>
                <Input />
            </Form.Item>
            <Form.Item label="Event date" name="eventDate" rules={[rules.required()]}>
                <DatePicker />
            </Form.Item>
            <Form.Item label="Guests" name="guests" rules={[rules.required()]}>
                <Select style={{width: 140}}>
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                </Select>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" ghost>
                        Create
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};
