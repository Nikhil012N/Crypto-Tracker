import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk } from './store';
import { CryptoState } from '@/constants/data.interface';


const initialState: CryptoState = {
    data: [],
    symbol: 'BTC',
    loading: false,
    error: null,
};

const apiUrl = process.env.NEXT_PUBLIC_BASE_URL ;

export const fetchCryptoData = (): AppThunk => async (dispatch, getState) => {
  dispatch(fetchStart());
  try {
    const symbol = getState()?.crypto?.symbol;
    const response = await axios.get(`${apiUrl}/api/crypto?symbol=${symbol}`);
    dispatch(fetchSuccess(response?.data));
  } catch (error:any) {
    dispatch(fetchFailure(error?.message));
  }
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setSymbol(state, action: PayloadAction<string>) {
      state.symbol = action.payload;
    },
    fetchStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess(state, action: PayloadAction<any[]>) {
      state.data = action.payload;
      state.loading = false;
    },
    fetchFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setSymbol, fetchStart, fetchSuccess, fetchFailure } = cryptoSlice.actions;
export default cryptoSlice.reducer;
