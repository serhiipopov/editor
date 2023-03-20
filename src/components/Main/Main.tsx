import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import WorkingList from '../WorkingList/WorkingList';

import SpinnerWrapper from '../UI/Spinner/Spinner';
import Error from '../UI/Error/Error';
import {copyItem, removeItem} from '../../store/workingItems/slice';
import {IBlockItem} from '../../types/blockItems';

const Main: FC = () => {
  const { items, isLoading, error } = useAppSelector(state => state.workingItemsReducer);
  const dispatch = useAppDispatch();

  const removeItemHandler = (id: number) => {
    dispatch(removeItem(id))
  }

  const copyItemHandler = (id: number) => {
    dispatch(copyItem(id))
  }

  if (isLoading) return <SpinnerWrapper />
  if (error) return <Error title='Not found' />

  return (
    <Box
      backgroundColor='#F5F5FC'
      paddingX='30px'
      paddingY='25px'
    >
      <WorkingList
        items={items}
        removeItem={removeItemHandler}
        copyItem={copyItemHandler}
      />
    </Box>
  )
}

export default Main;
