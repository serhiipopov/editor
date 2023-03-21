import React, { FC } from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import { IBlockItem } from '../../types/blockItems';
import DragBox from '../Dnd/DragBox';

interface BlockItemProps {
  item: IBlockItem;
  onAddItem: () => void;
}

const BlockItem: FC<BlockItemProps> = ({
  item,
  onAddItem,
  }) => {
  const { name, icon } = item;

  return (
    <DragBox item={item}>
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
        onClick={onAddItem}
      >
        <Image src={icon} />
        <Text fontSize='xs' color='#252A32'>{name}</Text>
      </Flex>
    </DragBox>
  )
}

export default BlockItem;
