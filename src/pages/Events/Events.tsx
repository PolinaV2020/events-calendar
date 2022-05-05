import React, {FC, useState, useEffect} from 'react';
import {Layout, Row, Button, Modal} from 'antd';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {EventsCalendar} from '../../components/EventsCalendar/EventsCalendar';
import {EventForm} from '../../components/EventForm/EventForm';
import {useActions} from '../../hooks/useActions';
import {Event} from '../../models/Event';

export const Events: FC = () => {
    const {fetchGuests, fetchEvents, createEvent} = useActions();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const {guests, events} = useTypedSelector((state) => state.event);
    const {user, isAuth} = useTypedSelector((state) => state.auth);

    console.log('isAuth', isAuth);

    useEffect(() => {
        fetchGuests();
        fetchEvents(user.username);
    }, []);

    const handleModal = (event: Event) => {
        setIsModalVisible(false);
        createEvent(event);
    };

    return (
        <Layout>
            <EventsCalendar events={events} />
            <Row justify="center" align="middle">
                <Button type="primary" size="large" onClick={() => setIsModalVisible(true)}>
                    Add event
                </Button>
            </Row>
            <Modal
                title="Add new event"
                visible={isModalVisible}
                footer={null}
                centered
                onCancel={() => setIsModalVisible(false)}
            >
                <EventForm guests={guests} onSubmit={handleModal} />
            </Modal>
        </Layout>
    );
};
