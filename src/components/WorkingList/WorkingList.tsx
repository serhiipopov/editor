import { FC } from 'react';
import { Stack } from '@chakra-ui/react';
import WorkingItem from '../WorkingItem/WorkingItem';
import { IBlockItem } from '../../types/blockItems';

interface WorkingListProps {
  items: IBlockItem[];
  removeItem: (id: number) => void;
  copyItem: (id: number) => void;
  handleUp: (i: number) => void;
  handleDown: (i: number) => void;
}

const WorkingList: FC<WorkingListProps> = ({
  items,
  removeItem,
  copyItem,
  handleUp,
  handleDown
  }) => {
  return (
    <Stack spacing='15px'>
      {items?.map((item, i) => (
        <WorkingItem
          key={item.id}
          icon={item.icon}
          name={item.name}
          type={item.type}
          removeItem={() => removeItem(item.id)}
          copyItem={() => copyItem(item.id)}
          handleUp={() => handleUp(i)}
          handleDown={() => handleDown(i)}
        />
      ))}
    </Stack>
  )
}

export default WorkingList;
