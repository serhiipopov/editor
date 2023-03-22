import { AnyAction, combineReducers, configureStore, Store } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import blockItemsReducer from './blockItems/slice';
import workingItemsReducer from './workingItems/slice';

export let store: Store<any, AnyAction>;

const rootReducer = combineReducers({
  blockItemsReducer,
  workingItemsReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

store = setupStore();
export const persist = persistStore(store);
