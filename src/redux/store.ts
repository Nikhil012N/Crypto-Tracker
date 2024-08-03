import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import dataReducer from './slice';
import { useDispatch } from 'react-redux';

const store = configureStore({
    reducer: {
        crypto: dataReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;