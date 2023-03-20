import { FC } from 'react';
import { Center, Spinner } from '@chakra-ui/react';

const SpinnerWrapper: FC = () => {
  return (
    <Center>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='grey.500'
        size='xl'
      />
    </Center>
  )
}

export default SpinnerWrapper;
