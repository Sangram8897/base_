
import { all } from 'redux-saga/effects';

import { watchAuth } from './auth';
import { watchThemeSaga } from './theme';

export function* watcherSaga() {
  yield all([
    watchAuth(),
    watchThemeSaga()
    // Add other sagas here
  ]);
}
