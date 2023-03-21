import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
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
    dispatch(removeItem(id))
  }

  const copyItemHandler = (id: number) => {
    dispatch(copyItem(id))
  }

  const upItemHandler = (i: number) =>  {
    dispatch(moveUp(i))
  }

  const downItemHandler = (i: number) =>  {
    dispatch(moveDown(i))
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
      />
    </Box>
  )
}

export default Main;
