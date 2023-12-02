import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './sagas/root_saga'
import authReducer from './reducer/authReducer'
import themeSlice from './slice/themeSlice'


const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeSlice,
  },
 middleware: (getDefaultMiddleware) =>
 getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(watcherSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch