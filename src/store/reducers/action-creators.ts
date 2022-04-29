import {AuthActionCreators} from './Auth/action-creators';
import {EventsActionCreators} from './Event/action-creators';

export const allActionCreators = {
    ...AuthActionCreators,
    ...EventsActionCreators,
};
