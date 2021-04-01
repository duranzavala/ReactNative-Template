import { AuthActionsType } from '@Redux/ActionTypes/AuthActionsType';

interface IAuthInitialState {
  avatar: any,
  name: String,
  repo: String,
  token: String,
  userId: String,
};

interface ISignIn {
  type: typeof AuthActionsType.SIGNIN
  payload: any
};

interface IError {
  type: typeof AuthActionsType.ERROR
  payload: any
}

interface ISignInSuccess {
  type: typeof AuthActionsType.SIGNIN_SUCCESS
  payload: any
}

interface ISignOut {
  type: typeof AuthActionsType.SIGNOUT
  payload: any
}

type UserActionTypes = ISignIn | IError | ISignInSuccess | ISignOut;

export {
    IAuthInitialState,
    IError,
    ISignIn,
    ISignInSuccess,
    UserActionTypes
};
