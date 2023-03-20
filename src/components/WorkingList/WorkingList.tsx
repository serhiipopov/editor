import { FC } from 'react';
import { Stack } from '@chakra-ui/react';
import { blockItems } from '../Toolbar/Toolbar';
import WorkingItem from '../WorkingItem/WorkingItem';

const WorkingList: FC = () => {
  return (
    <Stack spacing='15px'>
      {blockItems.map((item) => (
        <WorkingItem
          key={item.name}
          icon={item.icon}
          name={item.name}
        />
      ))}
    </Stack>
  )
}

export default WorkingList;
