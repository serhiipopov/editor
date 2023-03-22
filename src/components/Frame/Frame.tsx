import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/redux';
import {
  Box,
  Stack,
  Image,
  Text,
  Button,
  Center
} from '@chakra-ui/react';

const Frame: FC = () => {
  const { items } = useAppSelector(state => state.workingItemsReducer);
  const actualItems = items.filter((item) => item.title);

  return (
    <Box px='46px' py='30px' w='54%'>
      <Stack spacing='30px'>
        {actualItems?.map((item) => {
          return (
            <Box key={item?.id}>
              {item?.name === 'Image' && (
                <Image
                  key={item?.id}
                  src={item?.title as string}
                  borderRadius='5px'
                  w='full'
                  h='230px'
                  objectFit='cover'
                  objectPosition='center'
                />
              )}
              {item?.name === 'Headline' && (
                <Center key={item?.id}>
                  <Text
                    fontSize='22px'
                    fontWeight='bold'
                    letterSpacing='wide'
                    color='#252A32'
                  >
                    <>
                      {item.title}
                    </>
                  </Text>
                </Center>
              )}
              {item?.name === 'Paragraph' && (
                <Text
                  key={item.id}
                  fontSize='sm'
                  fontWeight='normal'
                  letterSpacing='wide'
                  textAlign='center'
                  color='#97AACD'
                >
                  <>
                    {item.title}
                  </>
                </Text>
              )}
              {item?.name === 'Button' && (
                <Center key={item?.id}>
                  <Button
                    backgroundColor='#4368E0'
                    color='white'
                    w='145px'
                    px='30px'
                    py='10px'
                    fontSize='sm'
                    fontWeight='medium'
                  >
                    <>
                      {item.title}
                    </>
                  </Button>
                </Center>
              )}
            </Box>
          )
        })}
      </Stack>
    </Box>
  )
}

export default Frame;
