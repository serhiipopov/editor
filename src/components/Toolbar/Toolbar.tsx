import { FC, useEffect } from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addBlockItems } from '../../store/blockItems/slice';
import { addItem } from '../../store/workingItems/slice';
import { IBlockItem } from '../../types/blockItems';
import BlockItem from '../BlockItem/BlockItem';

const Toolbar: FC = () => {
  const blockItems = useAppSelector(state => state.blockItemsReducer.items);
  const dispatch = useAppDispatch();

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
              name={item.name}
              icon={item.icon}
              onAddItem={() => addToMainItemHandler(item)}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}

export default Toolbar;
