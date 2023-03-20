import { FC } from 'react';
import { Center, Text } from '@chakra-ui/react';

interface ErrorProps {
  title: string;
}

const Error: FC<ErrorProps> = ({ title }) => {
  return (
    <Center>
      <Text fontSize='lg' fontWeight='bold' color='red.600'>{title}</Text>
    </Center>
  )
}

export default Error;
