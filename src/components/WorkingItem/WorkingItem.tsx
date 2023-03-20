import React, { FC, HTMLInputTypeAttribute, useState } from 'react';
import {
  Flex,
  Icon,
  HStack,
  Text,
  Input,
  Box
} from '@chakra-ui/react';

import ArrowTop from '../../icons/Arrow/ArrowTop';
import ArrowBottom from '../../icons/Arrow/ArrowBottom';
import Trash from '../../icons/Trash/Trash';
import Copy from '../../icons/Copy/Copy';
import IconButton from '../UI/IconButton/IconButton';

interface WorkingItemProp {
  name: string;
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  type: HTMLInputTypeAttribute;
  removeItem: () => void;
  copyItem: () => void;
}

const WorkingItem: FC<WorkingItemProp> = ({
  name,
  icon,
  type,
  removeItem,
  copyItem
  }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleHandler = () => setIsActive(true);

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
            <IconButton icon={Copy} handler={copyItem} />
            <IconButton icon={Trash} handler={removeItem}  />
          </Flex>
        </HStack>
      }

      <Icon as={icon}/>
      <Text fontSize='xs' color='#252A32'>{name}</Text>

      {isActive &&
        <Box
          p='5px'
          backgroundColor='white'
          w='full'
          borderRadius='2px'
          boxShadow='0px 64px 64px rgba(211, 214, 215, 0.2), 0px 32px 32px rgba(211, 214, 215, 0.2), 0px 16px 16px rgba(211, 214, 215, 0.2), 0px 4px 4px rgba(211, 214, 215, 0.2), 0px 2px 2px rgba(211, 214, 215, 0.2)'
        >
          <Input
            type={type}
            backgroundColor='white'
            variant='outline'
            borderRadius='2px'
            style={{ height: '28px' }}
          />
        </Box>
      }
    </Flex>
  )
}

export default WorkingItem;
