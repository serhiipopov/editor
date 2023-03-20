import {FC, useEffect} from 'react';
import { Box } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  copyItem, getAllItems,
  moveDown,
  moveUp,
  removeItem
} from '../../store/workingItems/slice';
import WorkingList from '../WorkingList/WorkingList';

import SpinnerWrapper from '../UI/Spinner/Spinner';
import Error from '../UI/Error/Error';

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

  useEffect(() => {
    dispatch(getAllItems())
  },[dispatch])

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
        handleUp={upItemHandler}
        handleDown={downItemHandler}
      />
    </Box>
  )
}

export default Main;
