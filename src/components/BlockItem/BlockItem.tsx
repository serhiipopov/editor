import React, { FC } from 'react';
import { Flex, Text, Icon } from '@chakra-ui/react';

interface BlockItemProps {
  name: string;
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

const BlockItem: FC<BlockItemProps> = ({ name, icon }) => {
  return (
    <Flex
      width='100px'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      borderRadius='md'
      backgroundColor='#F6F9FE'
      gap='10px'
      px='15px'
      py='10px'
    >
      <Icon as={icon} />
      <Text fontSize='xs' color='#252A32'>{name}</Text>
    </Flex>
  )
}

export default BlockItem;
