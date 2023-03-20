import React, { FC } from 'react';
import { Box, Icon } from '@chakra-ui/react';

interface IconButtonProps {
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  handler?: () => void;
}

const IconButton: FC<IconButtonProps> = ({ icon, handler }) => {
  return (
    <Box as='button' onClick={handler}>
      <Icon as={icon} />
    </Box>
  )
}

export default IconButton;
