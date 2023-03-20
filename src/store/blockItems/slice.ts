import { createSlice } from '@reduxjs/toolkit';
import { BlockItems } from '../../types/blockItems';

import IconHeadline from '../../icons/Headline/Headline';
import IconButton from '../../icons/Button/Button';
import IconParagraph from '../../icons/Paragraph/Paragraph';
import IconImage from '../../icons/Image/Image';

const initialState: BlockItems = {
  items: [
    {
      name: 'Headline',
      icon: IconHeadline,
      type: 'text',
      id: 1,
    },
    {
      name: 'Button',
      icon: IconButton,
      type: 'button',
      id: 2,
    },
    {
      name: 'Paragraph',
      icon: IconParagraph,
      type: 'text',
      id: 3,
    },
    {
      name: 'Image',
      icon: IconImage,
      type: 'file',
      id: 4
    },
  ]
}

export const blockItemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addBlockItems(state) {
      state.items = [...state.items]
    }
  }
})

export const { addBlockItems } = blockItemsSlice.actions;

export default blockItemsSlice.reducer;
