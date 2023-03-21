import React, { FC, HTMLInputTypeAttribute, useState } from 'react';
import {
  Flex,
  Image,
  HStack,
  Text,
  Input,
  Box
} from '@chakra-ui/react';
import IconButton from '../UI/IconButton/IconButton';

import Copy from '../../assets/images/Copy.svg';
import Trash from '../../assets/images/Trash.svg';
import ArrowTop from '../../assets/images/ArrowUp.svg';
import ArrowBottom from '../../assets/images/ArrowDown.svg';

interface WorkingItemProp {
  name: string;
  icon: string;
  type: HTMLInputTypeAttribute;
  removeItem: () => void;
  copyItem: () => void;
  handleUp: () => void;
  handleDown: () => void;
}

const WorkingItem: FC<WorkingItemProp> = ({
  name,
  icon,
  type,
  removeItem,
  copyItem,
  handleUp,
  handleDown
  }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).nodeName !== 'IMG') {
      setIsActive(prevState => !prevState)
    }
  }

  return (
    <Flex
      width='full'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      borderRadius='md'
      backgroundColor={isActive ? '#D9E7FF' : 'white'}
      position='relative'
      gap='10px'
      px='15px'
      py='10px'
      onClick={(e) => toggleHandler(e)}
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
            <IconButton icon={ArrowBottom} handler={handleDown} />
            <IconButton icon={ArrowTop} handler={handleUp} />
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

      <Image src={icon} />
      <Text fontSize='xs' color='#252A32'>{name}</Text>

      {isActive &&
        <Box
          p='5px'
          backgroundColor='white'
          w='full'
          h='38px'
          borderRadius='2px'
          boxShadow='0px 64px 64px rgba(211, 214, 215, 0.2), 0px 32px 32px
          rgba(211, 214, 215, 0.2), 0px 16px 16px
          rgba(211, 214, 215, 0.2), 0px 4px 4px
          rgba(211, 214, 215, 0.2), 0px 2px 2px rgba(211, 214, 215, 0.2)'
        >
          <Input
            type={type}
            required
            backgroundColor='white'
            variant='outline'
            borderRadius='2px'
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                console.log('Enter')
              }
            }}
            style={{ height: '28px', minHeight: 'full' }}
            sx={{
              '::-webkit-file-upload-button': {
                display: 'none'
            }
          }}
          />
        </Box>
      }
    </Flex>
  )
}

export default WorkingItem;
