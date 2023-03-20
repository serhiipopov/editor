import { combineReducers, configureStore } from '@reduxjs/toolkit';
import blockItemsReducer from './blockItems/slice';
import workingItemsReducer from './workingItems/slice';

const rootReducer = combineReducers({
  blockItemsReducer,
  workingItemsReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
