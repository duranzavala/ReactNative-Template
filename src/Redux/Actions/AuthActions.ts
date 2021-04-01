import { Alert } from 'react-native';

import AuthController from '@Controllers/AuthController';
import { AuthActionsType } from '@Redux/ActionTypes/AuthActionsType';

const actionSignIn = (email: string, password: string) => ({ type: AuthActionsType.SIGNIN, payload: { email, password } });

const signInSuccess = ({ response }: any) => {
    const loginResponseProcessed = AuthController.signInProcessResponse(response);
    return {
        type: AuthActionsType.SIGNIN_SUCCESS,
        payload: loginResponseProcessed,
    };
};
const siginFailed = (response: any) => {
    Alert.alert('Error getting the github user');
    return { type: AuthActionsType.ERROR }
};

export {
    actionSignIn,
    siginFailed,
    signInSuccess
};
