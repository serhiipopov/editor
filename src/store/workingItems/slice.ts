import { WorkingItemsState } from '../../types/workingItems';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBlockItem } from '../../types/blockItems';

const initialState: WorkingItemsState = {
  items: [],
  isLoading: false,
  error: '',
}

export const workingItemsSlice = createSlice({
  name: 'workingItems',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IBlockItem>) {
      state.items = [...state.items, { ...action.payload }]
      state.error = ''
      state.isLoading = false
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    copyItem(state, action: PayloadAction<number>) {
      const itemToCopy = state.items.find(item => item.id === action.payload)
      if (itemToCopy) {
        state.items = [...state.items, { ...itemToCopy, id: Date.now() }]
      }
    }
  }
})

export const {
  addItem,
  removeItem,
  copyItem
} = workingItemsSlice.actions;

export default workingItemsSlice.reducer;

