import {EventActionEnum, SetEventsAction, SetGuestsAction} from './types';
import {User} from '../../../models/User';
import {Event} from '../../../models/Event';
import {AppDispatch} from '../../index';
import UserService from '../../../api/UserService';

export const EventsActionCreators = {
    setGuests: (payload: User[]): SetGuestsAction => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvents: (payload: Event[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUsers();
            dispatch(EventsActionCreators.setGuests(response.data));
        } catch (e) {
            console.log('Users fetching error');
        }
    },
    createEvent: (event: Event) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]';
            const json = JSON.parse(events) as Event[];
            json.push(event);
            dispatch(EventsActionCreators.setEvents(json));
            localStorage.setItem('events', JSON.stringify(json));
        } catch (error) {
            console.log(error);
        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]';
            const json = JSON.parse(events) as Event[];
            const currentUserEvents = json.filter((event) => event.author === username || event.guest === username);
            dispatch(EventsActionCreators.setEvents(currentUserEvents));
        } catch (error) {
            console.log(error);
        }
    },
};
