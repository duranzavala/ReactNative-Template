import { IAuthInitialState, UserActionTypes } from '@Interfaces/IAuthState';
import { AuthActionsType } from '@Redux/ActionTypes/AuthActionsType';

const initialState: IAuthInitialState = {
    avatar: null,
    name: '',
    repo: '',
    token: '',
    userId: '',
};

export const authReducer = (state = initialState, action: UserActionTypes) : IAuthInitialState => {
    switch (action.type) {
        case AuthActionsType.SIGNIN:
            return { ...state, ...action.payload }
        case AuthActionsType.SIGNIN_SUCCESS:
            return { ...state, ...action.payload }
        case AuthActionsType.ERROR:
            return { ...initialState }
        case AuthActionsType.SIGNOUT:
            return { ...initialState }
        default: return state;
    }
}
