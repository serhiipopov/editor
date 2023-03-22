import { FC } from 'react';
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
  const { frameItems } = useAppSelector(state => state.frameReducer);

  return (
    <Box px='46px' py='30px' w='54%'>
      <Stack spacing='30px'>
        {frameItems?.map((item) => {
          if (item.type === 'Image') {

            return (
              <Image
                key={item.id}
                src={item.name as string}
                borderRadius='5px'
                w='full'
                h='230px'
                objectFit='cover'
                objectPosition='center'
              />
            )
          }
          if (item.type === 'Headline') {

            return (
              <Center key={item.id}>
                <Text
                  fontSize='22px'
                  fontWeight='bold'
                  letterSpacing='wide'
                  color='#252A32'
                >
                  <>
                    {item.name}
                  </>
                </Text>
              </Center>
            )
          }
          if (item.type === 'Paragraph') {

            return (
              <Text
                key={item.id}
                fontSize='sm'
                fontWeight='normal'
                letterSpacing='wide'
                textAlign='center'
                color='#97AACD'
              >
                <>
                  {item.name}
                </>
              </Text>
            )
          }
          if (item.type === 'Button') {

            return (
              <Center key={item.id}>
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
                    {item.name}
                  </>
                </Button>
              </Center>
            )
          }

          return []
        })}
      </Stack>
    </Box>
  )
}

export default Frame;
