import React, { FC } from 'react';
import { useDrag } from 'react-dnd';
import { Box } from '@chakra-ui/react';
import { IBlockItem } from '../../types/blockItems';

interface DragBoxProps {
  item: IBlockItem;
  children: React.ReactNode;
}

const DragBox: FC<DragBoxProps> = ({ item, children }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'box',
    item: { ...item },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  return (
    <Box ref={drag} style={{ opacity: isDragging ? 0.3 : 1 }}>
      {children}
    </Box>
  )
}

export default DragBox;
