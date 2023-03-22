import { WorkingItemsState } from '../../types/workingItems';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBlockItem } from '../../types/blockItems';
import { setStateToLocalStorage } from '../../helpers/localStorage';

const initialState: WorkingItemsState = {
  items: [],
  isLoading: false,
  error: '',
}

export const workingItemsSlice = createSlice({
  name: 'workingItems',
  initialState,
  reducers: {
    getAll(state, action: PayloadAction<any>) {
      state.items = action.payload;
    },
    addItem(state, action: PayloadAction<IBlockItem>) {
      state.items = [...state.items, { ...action.payload }]
      state.error = ''
      state.isLoading = false
      setStateToLocalStorage(state.items, 'workingItems')
    },
    updateItem(state, action: PayloadAction<IBlockItem>) {
      state.items = state.items.map(item => {
        if (item.id === action.payload.id) {
          return action.payload
        }
      return item
      })
      setStateToLocalStorage(state.items, 'workingItems')
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload)
      setStateToLocalStorage(state.items, 'workingItems')
    },
    copyItem(state, action: PayloadAction<number>) {
      const itemToCopy = state.items.find(item => item.id === action.payload)
      if (itemToCopy) {
        state.items = [...state.items, { ...itemToCopy, id: Date.now() }]
      }
      setStateToLocalStorage(state.items, 'workingItems')
    },
    moveUp(state, action: PayloadAction<number>) {
      const index = action.payload
      if (index > 0) {
        const newState = [...state.items]
        const selectedItem = newState.splice(index, 1)[0]
        newState.splice(index - 1, 0, selectedItem)
        state.items = [...newState]
      }
      setStateToLocalStorage(state.items, 'workingItems')
    },
    moveDown(state, action: PayloadAction<number>) {
      const index = action.payload
      const lastItem = state.items.length - 1
      if (index < lastItem) {
        const newItems = [...state.items]
        const selectedItem = newItems.splice(index, 1)[0]
        newItems.splice(index + 1, 0, selectedItem)
        state.items = [...newItems]
      }
      setStateToLocalStorage(state.items, 'workingItems')
    }
  }
});

export const {
  getAll,
  addItem,
  updateItem,
  removeItem,
  copyItem,
  moveUp,
  moveDown
} = workingItemsSlice.actions;

export default workingItemsSlice.reducer;
