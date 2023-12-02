
import { put, call, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from '../actions/auth';
import { actionTypes } from '../constants/auth';


function* loginUser(action) {
    try {
        const { username, password } = action.payload;


        const userData = {
            displayName: '',
            email: '',
            emailVerified: true,
            uid: ''
        };

        yield put(loginSuccess(userData));

    } catch (error) {
        yield put(loginFailure(error.message));
    }
}

export function* watchAuth() {
    yield takeLatest(actionTypes.LOGIN_REQUEST, loginUser);
}