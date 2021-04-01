import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
    catchError,
    map,
    mergeMap
} from 'rxjs/operators';

import AuthApi from '@Api/AuthApi';
import { siginFailed, signInSuccess } from '@Redux/Actions/AuthActions';
import { AuthActionsType } from '@Redux/ActionTypes/AuthActionsType';

const authEpic = (action$: any) => action$.pipe(
    ofType(AuthActionsType.SIGNIN),
    mergeMap((action: any) => from(AuthApi.signIn(action.payload.email, action.payload.password))
        .pipe(
            map(response => signInSuccess(response)),
            catchError((error) => of(siginFailed(error)))
        )
    )
);

export { authEpic };
