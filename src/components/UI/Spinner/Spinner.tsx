import { FC } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

const SpinnerWrapper: FC = () => {
  return (
    <Box>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='grey.500'
        size='xl'
      />
    </Box>
  )
}

export default SpinnerWrapper;
