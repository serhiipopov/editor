import React, { FC } from 'react';
import { Stack } from '@chakra-ui/react';
import { useDrop } from 'react-dnd';
import { addItem } from '../../store/workingItems/slice';
import { useAppDispatch } from '../../hooks/redux';
import { IBlockItem } from '../../types/blockItems';
import WorkingItem from '../WorkingItem/WorkingItem';

interface WorkingListProps {
  items: IBlockItem[];
  removeItem: (id: number) => void;
  copyItemHandler: (id: number) => void;
  handleUp: (i: number) => void;
  handleDown: (i: number) => void;
  inputFileHandler: (e: React.ChangeEvent<HTMLInputElement>, item: IBlockItem) => void;
  enterHandler: (e: React.KeyboardEvent<HTMLInputElement>, item: IBlockItem) => void;
}

const WorkingList: FC<WorkingListProps> = ({
  items,
  removeItem,
  copyItemHandler,
  handleUp,
  handleDown,
  inputFileHandler,
  enterHandler,
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
          inputEnterHandler={(e) => enterHandler(e, item)}
          inputFileHandler={(e) => inputFileHandler(e, item)}
        />
      ))}
    </Stack>
  )
}

export default WorkingList;
