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
    },
    moveUp(state, action: PayloadAction<number>) {
      const index = action.payload
      if (index > 0) {
        const newState = [...state.items]
        const selectedItem = newState.splice(index, 1)[0]
        newState.splice(index - 1, 0, selectedItem)
        state.items = [...newState]
      }
    },
    moveDown(state, action: PayloadAction<number>) {
      const index = action.payload
      const lastItem = state.items.length - 1
      if (index < lastItem) {
        const newItems = [...state.items];
        const selectedItem = newItems.splice(index, 1)[0];
        newItems.splice(index + 1, 0, selectedItem);
        state.items = [...newItems]
      }
    }
  }
});

export const {
  addItem,
  removeItem,
  copyItem,
  moveUp,
  moveDown
} = workingItemsSlice.actions;

export default workingItemsSlice.reducer;
