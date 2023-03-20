import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import WorkingList from '../WorkingList/WorkingList';

const Main: FC = () => {
  return (
    <Box
      backgroundColor='#F5F5FC'
      paddingX='30px'
      paddingY='25px'
    >
      <WorkingList />
    </Box>
  )
}

export default Main;
