import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import logger from 'redux-logger';

import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(
  persistConfig,
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
