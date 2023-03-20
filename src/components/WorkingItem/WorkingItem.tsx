import React, { FC, useState } from 'react';
import { Flex, Icon, HStack, Text } from '@chakra-ui/react';

import ArrowTop from '../../icons/Arrow/ArrowTop';
import ArrowBottom from '../../icons/Arrow/ArrowBottom';
import Trash from '../../icons/Trash/Trash';
import Copy from '../../icons/Copy/Copy';
import IconButton from '../UI/IconButton/IconButton';

interface WorkingItemProp {
  name: string;
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

const WorkingItem: FC<WorkingItemProp> = ({ name, icon }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleHandler = () => setIsActive(prevState => !prevState);

  return (
    <Flex
      as='button'
      width='478px'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      borderRadius='md'
      backgroundColor={isActive ? '#D9E7FF' : 'white'}
      position='relative'
      gap='10px'
      px='15px'
      py='10px'
      onClick={toggleHandler}
    >

      {isActive &&
        <HStack
          spacing='2'
          position='absolute'
          top='-27px'
          right='8px'
        >
          <Flex
            backgroundColor='#449CF4'
            p='3px'
            gap='5px'
            borderTopRightRadius='3px'
            borderTopLeftRadius='3px'
          >
            <IconButton icon={ArrowBottom} />
            <IconButton icon={ArrowTop} />
          </Flex>
          <Flex
            backgroundColor='#449CF4'
            p='3px'
            gap='5px'
            borderTopRightRadius='3px'
            borderTopLeftRadius='3px'
          >
            <IconButton icon={Copy} />
            <IconButton icon={Trash} />
          </Flex>
        </HStack>
      }

      <Icon as={icon} />
      <Text fontSize='xs' color='#252A32'>{name}</Text>
    </Flex>
  )
}

export default WorkingItem;
