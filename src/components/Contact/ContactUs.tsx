import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  Container,
  rem,
  ThemeIcon
} from '@mantine/core';
import { IconBrandInstagram, IconCheckupList } from '@tabler/icons-react';
import { ContactIconsList } from './ContactIcon';
import classes from './ContactUs.module.css';
import { api } from '~/utils/api';
import { useForm } from '@mantine/form';
import { type ContactUsDataType } from '~/types/ContactUs';
import { useState } from 'react';

const social = [IconBrandInstagram];

export function ContactUs() {
  const icons = social.map((Icon, index) => (
    <ActionIcon component="a" href={"/"} key={index} size={28} className={classes.social} variant="transparent">
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));
  const contactUsForm = useForm<ContactUsDataType>({
    initialValues: {
      email: "",
      name: "",
      message: ""
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email!"),
      name: (value) => value.toString().trim().length > 0 ? null : "Please provide valid name!",
      message: (value) => value.toString().trim().length > 0 ? null : "Message is not valid!"
    }
  })
  const [sucessStatus, setSucessStatus] = useState(false);
  const contactUsMutation = api.contact.notify.useMutation();

  function sumbitContactInfo() {
    contactUsMutation.mutate(contactUsForm.values);
    setSucessStatus(true);
    return;
  }
  return (

    <div className={classes.wrapper}>
      <Container>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={classes.title}>Contact us</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Leave your email and we will get back to you within 24 hours
            </Text>

            <ContactIconsList />

            <Group mt="xl">{icons}</Group>
          </div>
          <div className={classes.form}>
            <form onSubmit={contactUsForm.onSubmit(sumbitContactInfo)}>
              {!sucessStatus ? (
                <>
                  <TextInput
                    label="Email"
                    placeholder="your@email.com"
                    required
                    {...contactUsForm.getInputProps("email")}
                    classNames={{ input: classes.input, label: classes.inputLabel }}
                  />
                  <TextInput
                    label="Name"
                    required
                    placeholder="John Doe"
                    mt="md"
                    {...contactUsForm.getInputProps("name")}
                    classNames={{ input: classes.input, label: classes.inputLabel }}
                  />
                  <Textarea
                    required
                    label="Your message"
                    placeholder="I want to book a cleaning...."
                    minRows={4}
                    mt="md"
                    {...contactUsForm.getInputProps("message")}
                    classNames={{ input: classes.input, label: classes.inputLabel }}
                  />

                  <Group justify="flex-end" mt="md">
                    <Button type={"submit"} loading={contactUsMutation.isLoading} className={classes.control}>Send message</Button>
                  </Group>
                </>
              ) :
                (
                  <div className={classes.successMessage}>
                    <ThemeIcon
                      size={44}
                      radius="md"
                      variant="gradient"
                      gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
                    >
                      <IconCheckupList style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
                    </ThemeIcon>
                    <Text fz="lg" mt="sm" fw={500}>
                      Thank You for Contacting Us
                    </Text>
                    <Text c="dimmed" fz="sm">
                      Thanks for reaching out! We've received your message and will get back to you shortly.
                    </Text>
                  </div>
                )}
            </form>
          </div>
        </SimpleGrid>
      </Container>
    </div>

  );
}