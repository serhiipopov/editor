import { FC } from 'react';
import { Center, Text } from '@chakra-ui/react';

interface TextFieldProps {
  text: string;
}

const TextField: FC<TextFieldProps> = ({ text }) => {
  return (
    <Center>
      <Text
        fontSize='4xl'
        fontWeight='light'
        color='blue.700'
      >
        {text}
      </Text>
    </Center>
  )
}

export default TextField;
