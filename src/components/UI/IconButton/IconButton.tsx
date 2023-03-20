import React, { FC } from 'react';
import { Box, Icon } from '@chakra-ui/react';

interface IconButtonProps {
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

const IconButton: FC<IconButtonProps> = ({ icon }) => {
  return (
    <Box as='button'>
      <Icon as={icon} />
    </Box>
  )
}

export default IconButton;
