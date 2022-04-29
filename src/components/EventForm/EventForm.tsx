import React, {FC, useState} from 'react';
import {Row, Form, Select, DatePicker, Input, Button} from 'antd';
import {Moment} from 'moment';
import {rules} from '../../utils/rules';
import {User} from '../../models/User';
import {Event} from '../../models/Event';
import {formatDate} from '../../utils/formatDate';
import {useTypedSelector} from '../../hooks/useTypedSelector';
interface EventFormProps {
    guests: User[];
    onSubmit: (event: Event) => void;
}

export const EventForm: FC<EventFormProps> = (props) => {
    const {guests, onSubmit} = props;

    const {user} = useTypedSelector((state) => state.auth);

    const [event, setEvent] = useState<Event>({
        author: '',
        description: '',
        date: '',
        guest: '',
    } as Event);

    const handleDataSelect = (date: Moment | null) => {
        if (date) {
            onSubmit({...event, date: formatDate(date.toDate())});
        }
    };

    return (
        <Form onFinish={onSubmit}>
            <Form.Item label="Description" name="description" rules={[rules.required()]}>
                <Input value={event.description} onChange={(e) => setEvent({...event, description: e.target.value})} />
            </Form.Item>
            <Form.Item label="Event date" name="date" rules={[rules.required()]}>
                <DatePicker onChange={(date) => handleDataSelect(date)} />
            </Form.Item>
            <Form.Item label="Choose guests" name="guests" rules={[rules.required()]}>
                <Select style={{width: 140}} onChange={(guest: string) => setEvent({...event, guest})}>
                    {guests.map((guest) => {
                        return (
                            <Select.Option key={guest.username} value={guest.username}>
                                {guest.username}
                            </Select.Option>
                        );
                    })}
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
