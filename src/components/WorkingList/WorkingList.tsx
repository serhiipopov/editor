import {FC, useEffect, useState} from 'react';
import { Stack } from '@chakra-ui/react';
import WorkingItem from '../WorkingItem/WorkingItem';
import { IBlockItem } from '../../types/blockItems';
import {useDrop} from 'react-dnd';
import {addBlockItems} from '../../store/blockItems/slice';
import {addItem, copyItem} from '../../store/workingItems/slice';
import {useAppDispatch} from '../../hooks/redux';

interface WorkingListProps {
  items: IBlockItem[];
  removeItem: (id: number) => void;
  copyItemHandler: (id: number) => void;
  handleUp: (i: number) => void;
  handleDown: (i: number) => void;
}

const WorkingList: FC<WorkingListProps> = ({
  items,
  removeItem,
  copyItemHandler,
  handleUp,
  handleDown,
  }) => {
  const dispatch = useAppDispatch();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'box',
    drop: (item: IBlockItem) => {
      dispatch(addItem({ ...item, id: Date.now() }))
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }))

  return (
    <Stack spacing='15px' h='full' ref={drop}>
      {items?.map((item, i) => (
        <WorkingItem
          key={item.id}
          icon={item.icon}
          name={item.name}
          type={item.type}
          removeItem={() => removeItem(item.id)}
          copyItem={() => copyItemHandler(item.id)}
          handleUp={() => handleUp(i)}
          handleDown={() => handleDown(i)}
        />
      ))}
    </Stack>
  )
}

export default WorkingList;
