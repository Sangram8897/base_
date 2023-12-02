import { takeLatest, put } from 'redux-saga/effects';
import { toggleTheme } from '../slice/themeSlice';

// Worker Saga
function* handleToggleTheme() {
  // Additional logic can be added here
  yield put(toggleTheme());
}

// Watcher Saga
export function* watchThemeSaga() {
  yield takeLatest('TOGGLE_THEME', handleToggleTheme);
}

