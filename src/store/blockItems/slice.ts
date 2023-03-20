import { createSlice } from '@reduxjs/toolkit';
import { BlockItems } from '../../types/blockItems';

import Headline from'../../assets/images/Headline.svg';
import Paragraph from '../../assets/images/Paragraph.svg';
import Button from '../../assets/images/Button.svg';
import Image from '../../assets/images/Image.svg';

const initialState: BlockItems = {
  items: [
    {
      name: 'Headline',
      icon: Headline,
      type: 'text',
      id: 1,
    },
    {
      name: 'Paragraph',
      icon: Paragraph,
      type: 'text',
      id: 2,
    },
    {
      name: 'Button',
      icon: Button,
      type: 'button',
      id: 3,
    },
    {
      name: 'Image',
      icon: Image,
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
