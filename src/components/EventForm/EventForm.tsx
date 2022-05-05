import React, {FC, useState} from 'react';
import {Row, Form, Select, DatePicker, Input, Button} from 'antd';
import moment, {Moment} from 'moment';
import {rules} from '../../utils/rules';
import {User} from '../../models/User';
import {Event} from '../../models/Event';
import {useTypedSelector} from '../../hooks/useTypedSelector';
interface EventFormProps {
    guests: User[];
    onSubmit: (event: Event) => void;
}

export const EventForm: FC<EventFormProps> = (props) => {
    const {guests, onSubmit} = props;

    const [event, setEvent] = useState<Event>({
        author: '',
        date: '',
        description: '',
        guest: '',
    } as Event);

    const {user} = useTypedSelector((state) => state.auth);

    const handleDataSelect = (date: Moment | null) => {
        if (date) {
            setEvent({...event, date: moment(date).format('YYYY.MM.DD')});
        }
    };

    const submitForm = () => {
        onSubmit({...event, author: user.username});
    };

    return (
        <Form onFinish={submitForm}>
            <Form.Item label="Description" name="description" rules={[rules.required()]}>
                <Input value={event.description} onChange={(e) => setEvent({...event, description: e.target.value})} />
            </Form.Item>
            <Form.Item label="Event date" name="date" rules={[rules.required(), rules.isDateValid('Uncorrect date')]}>
                <DatePicker onChange={(date) => handleDataSelect(date)} />
            </Form.Item>
            <Form.Item label="Choose guests" name="guests" rules={[rules.required()]}>
                <Select style={{width: 140}} onChange={(guest: string) => setEvent({...event, guest: guest})}>
                    {guests.map((guest) => (
                        <Select.Option key={guest.username} value={guest.username}>
                            {guest.username}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit" ghost>
                        Create
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};
