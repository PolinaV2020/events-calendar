import React, {FC} from 'react';
import {Calendar} from 'antd';
import {Event} from '../../models/Event';

interface EventsCalendarProps {
    events: Event[];
}

export const EventsCalendar: FC<EventsCalendarProps> = () => {
    return <Calendar />;
};
