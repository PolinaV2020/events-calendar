import React, {FC} from 'react';
import {Calendar, Badge} from 'antd';
import moment, {Moment} from 'moment';
import {Event} from '../../models/Event';

interface EventsCalendarProps {
    events: Event[];
}

export const EventsCalendar: FC<EventsCalendarProps> = (props) => {
    const {events} = props;
    console.log(events);

    const dateCellRender = (value: Moment) => {
        const formatedDate = moment(value.toDate()).format('YYYY.MM.DD');
        const currentDayEvents = events.filter((event) => event.date === formatedDate);
        return (
            <div>
                {currentDayEvents.map((event, index) => (
                    <Badge status={'success'} key={index} text={event.description}></Badge>
                ))}
            </div>
        );
    };
    return <Calendar dateCellRender={dateCellRender} />;
};
