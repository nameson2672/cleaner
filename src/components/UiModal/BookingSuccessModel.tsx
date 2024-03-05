import { useDisclosure } from '@mantine/hooks';
import { Box, Center, Modal } from '@mantine/core';
import { Text, ThemeIcon, rem } from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons-react';
import { useEffect } from 'react';
import classes from './BookingSuccessModel.module.css'
import { redirect, useRouter } from 'next/navigation';

export function BookingSuccessModel({ isModelOpened = false }) {
  const [opened, { open, close }] = useDisclosure(isModelOpened);
  useEffect(() => {
    isModelOpened ? open() : close();
  }, [isModelOpened])
  const router = useRouter()
  function onClose(){
    router.push('/services');
  }

  return (
    <>
      <Modal opened={opened} onClose={onClose} centered>
      <Box className={classes.center}>
        <ThemeIcon
          size="xl"
          radius="md"
          variant="gradient"
          gradient={{ deg: 0, from: 'pink', to: 'orange' }}
        >
          <IconColorSwatch style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
        </ThemeIcon>
        <Text size="xl" fw={500} mt="md">
          Congralutation You booking is completed 
        </Text>
        <Text size="lg" fw={500}>
        We sent you e-mail for your booking info
      </Text>
        <Text size="sm" mt="sm" c="dimmed">
          For payment: you will pay after we clean your place. 
          You can give it to the our clearner that will ariving to your place. 
        </Text>
        </Box>   
      </Modal>
    </>
  );
}