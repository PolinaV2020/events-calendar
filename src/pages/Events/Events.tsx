import React, {FC, useState, useEffect} from 'react';
import {Layout, Row, Button, Modal} from 'antd';
import {EventsCalendar} from '../../components/EventsCalendar/EventsCalendar';
import {EventForm} from '../../components/EventForm/EventForm';
import {useActions} from '../../hooks/useActions';

export const Events: FC = () => {
    const {fetchGuests} = useActions();
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        fetchGuests();
    });

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
                <EventForm />
            </Modal>
        </Layout>
    );
};
