import { UserActionTypes } from './user.types';
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,//these strings should never change
    payload: user
});