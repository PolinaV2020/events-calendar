import React, {FC, useState, useEffect} from 'react';
import {Layout, Row, Button, Modal} from 'antd';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {EventsCalendar} from '../../components/EventsCalendar/EventsCalendar';
import {EventForm} from '../../components/EventForm/EventForm';
import {useActions} from '../../hooks/useActions';
import {Event} from '../../models/Event';

export const Events: FC = () => {
    const {fetchGuests, createEvent} = useActions();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const {guests} = useTypedSelector((state) => state.event);

    useEffect(() => {
        fetchGuests();
    }, []);

    const handleModal = (event: Event) => {
        createEvent(event);
        setIsModalVisible(false);
    };

    return (
        <Layout>
            <EventsCalendar events={[]} />
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
