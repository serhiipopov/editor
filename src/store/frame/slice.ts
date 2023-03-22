import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FrameItem, FrameState } from '../../types/frameItems';

const initialState: FrameState = {
  frameItems: []
}

const frameSlice = createSlice({
  name: 'frame',
  initialState,
  reducers: {
    addIFrameItem(state, action: PayloadAction<FrameItem>) {
      state.frameItems = [ ...state.frameItems, { ...action.payload }]
    }
  }
})

export const { addIFrameItem } = frameSlice.actions;

export default frameSlice.reducer;
