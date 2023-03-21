import React, { FC } from 'react';
import { Box, Image } from '@chakra-ui/react';

interface IconButtonProps {
  icon: string;
  handler: () => void;
}

const IconButton: FC<IconButtonProps> = ({ icon, handler }) => {
  return (
    <Box onClick={handler} sx={{ cursor: 'pointer' }}>
      <Image src={icon} />
    </Box>
  )
}

export default IconButton;
