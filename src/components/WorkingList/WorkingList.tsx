import { FC } from 'react';
import { Stack } from '@chakra-ui/react';
import WorkingItem from '../WorkingItem/WorkingItem';
import { IBlockItem } from '../../types/blockItems';

interface WorkingListProps {
  items: IBlockItem[];
  removeItem: (id: number) => void;
  copyItem: (id: number) => void;
}

const WorkingList: FC<WorkingListProps> = ({
  items,
  removeItem,
  copyItem ,
  }) => {
  return (
    <Stack spacing='15px'>
      {items?.map((item) => (
        <WorkingItem
          key={item.id}
          icon={item.icon}
          name={item.name}
          type={item.type}
          removeItem={() => removeItem(item.id)}
          copyItem={() => copyItem(item.id)}
        />
      ))}
    </Stack>
  )
}

export default WorkingList;
