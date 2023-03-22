import { FC, useEffect } from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addBlockItems } from '../../store/blockItems/slice';
import { addItem } from '../../store/workingItems/slice';
import BlockItem from '../BlockItem/BlockItem';
import { IBlockItem } from '../../types/blockItems';

const Toolbar: FC = () => {
  const dispatch = useAppDispatch();
  const blockItems = useAppSelector(state => state.blockItemsReducer.items);

  const addToMainItemHandler = (item: IBlockItem) => {
    const newItem = {
      ...item,
      id: Date.now()
    }
    dispatch(addItem(newItem))
  }

  useEffect(() => {
    dispatch(addBlockItems())
  }, [dispatch])

  return (
    <Box p='30px' maxW='270px'>
      <Grid templateColumns='repeat(2, 1fr)' gap='10px'>
        {blockItems?.map((item) => (
          <GridItem key={item.id}>
            <BlockItem
              item={item}
              onAddItem={() => addToMainItemHandler(item)}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}

export default Toolbar;
