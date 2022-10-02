import {configureStore} from '@reduxjs/toolkit';
import NotesReducer from './reducers/NotesReducer';

export const store = configureStore({
  reducer: {
    note: NotesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
