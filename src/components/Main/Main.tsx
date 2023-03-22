import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addIFrameItem } from '../../store/frame/slice';
import {
  copyItem,
  moveDown,
  moveUp,
  removeItem
} from '../../store/workingItems/slice';

import WorkingList from '../WorkingList/WorkingList';
import SpinnerWrapper from '../UI/Spinner/Spinner';
import Error from '../UI/Error/Error';
import TextField from '../UI/TextFiled/TextField';

const Main: FC = () => {
  const { items, isLoading, error } = useAppSelector(state => state.workingItemsReducer);
  const dispatch = useAppDispatch();

  const removeItemHandler = (id: number) => {
    dispatch(removeItem(id));
  }

  const copyItemHandler = (id: number) => {
    dispatch(copyItem(id));
  }

  const upItemHandler = (i: number) =>  {
    dispatch(moveUp(i));
  }

  const downItemHandler = (i: number) =>  {
    dispatch(moveDown(i));
  }

  const enterHandler = (event: React.KeyboardEvent<HTMLInputElement>, name: string) => {
    const target = event.target as HTMLInputElement
    if (event.key === 'Enter') {

      const newItem = {
        name: target.value,
        id: Date.now(),
        type: name
      }

      dispatch(addIFrameItem(newItem));
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    if (!e.target.files || !e.target.files.length) {
      return;
    }
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const newItem = {
        name: reader.result,
        id: Date.now(),
        type: name
      }

      dispatch(addIFrameItem(newItem));
    }

    reader.readAsDataURL(file);
  }

  if (isLoading) return <SpinnerWrapper />
  if (error) return <Error title='Not found' />

  return (
    <Box
      backgroundColor='#F5F5FC'
      paddingX='30px'
      paddingY='25px'
      minW='37%'
    >

      { !items.length && <TextField text='The list is clean' /> }

      <WorkingList
        items={items}
        removeItem={removeItemHandler}
        copyItemHandler={copyItemHandler}
        handleUp={upItemHandler}
        handleDown={downItemHandler}
        enterHandler={enterHandler}
        inputFileHandler={handleFileSelect}
      />
    </Box>
  )
}

export default Main;
