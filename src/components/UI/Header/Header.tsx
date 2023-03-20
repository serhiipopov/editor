import { FC } from 'react';
import { Box, Divider, Text } from '@chakra-ui/react';

const Header: FC = () => {
  return (
    <Box>
      <Text
        paddingY='21px'
        pl='31px'
        fontSize='lg'
        fontWeight='medium'
      >
        REACT EDITOR Test
      </Text>
      <Divider orientation='horizontal' opacity='1' w='full' color='#E4E6F1' />
    </Box>
  )
}

export default Header;
