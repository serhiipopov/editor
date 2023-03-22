import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FrameState } from '../../types/frameItems';
import { IBlockItem } from '../../types/blockItems';

const initialState: FrameState = {
  frameItems: []
}

const frameSlice = createSlice({
  name: 'frameItems',
  initialState,
  reducers: {
    addIFrameItem(state, action: PayloadAction<IBlockItem>) {
      state.frameItems = [ ...state.frameItems, { ...action.payload }]
    },
    removeFrameItem(state, action: PayloadAction<number>) {
      state.frameItems = state.frameItems.filter(item => item.id !== action.payload)
    },
    moveUpFrameItem(state, action: PayloadAction<number>) {
      const index = action.payload
      if (index > 0) {
        const newState = [...state.frameItems]
        const selectedItem = newState.splice(index, 1)[0]
        newState.splice(index - 1, 0, selectedItem)
        state.frameItems = [...newState]
      }
    },
    moveDownFrameItem(state, action: PayloadAction<number>) {
      const index = action.payload
      const lastItem = state.frameItems.length - 1
      if (index < lastItem) {
        const newItems = [...state.frameItems];
        const selectedItem = newItems.splice(index, 1)[0]
        newItems.splice(index + 1, 0, selectedItem)
        state.frameItems = [...newItems]
      }
    }
  }
})

export const {
  addIFrameItem,
  moveDownFrameItem,
  moveUpFrameItem,
  removeFrameItem
} = frameSlice.actions;

export default frameSlice.reducer;
