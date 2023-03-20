import { FC } from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import BlockItem from '../BlockItem/BlockItem';

import IconButton from './../../icons/Button/Button';
import IconParagraph from './../../icons/Paragraph/Paragraph';
import IconHeadline from './../../icons/Headline/Headline';
import IconImage from './../../icons/Image/Image';

export const blockItems = [
  {
    name: 'Headline',
    icon: IconHeadline
  },
  {
    name: 'Button',
    icon: IconButton
  },
  {
    name: 'Paragraph',
    icon: IconParagraph
  },
  {
    name: 'Image',
    icon: IconImage
  },
]

const Toolbar: FC = () => {
  return (
    <Box p='30px' maxW='270px'>
      <Grid templateColumns='repeat(2, 1fr)' gap='10px'>
        {blockItems.map(({ name, icon }) => (
          <GridItem key={name}>
            <BlockItem name={name} icon={icon} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}

export default Toolbar;
