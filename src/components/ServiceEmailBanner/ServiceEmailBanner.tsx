import { Text, Title, TextInput, Button, Image, Container } from '@mantine/core';
import classes from './ServiceEmailBanner.module.css';

export function ServiceEmailBanner() {
  return (
    <Container>
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Wait a minute...</Title>
        <Text fw={500} fz="lg" mb={5}>
          Subscribe to our newsletter!
        </Text>
        <Text fz="sm" c="dimmed">
          You will never miss important product updates, latest news and community QA sessions. Our
          newsletter is once a week, every Sunday.
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder="Your email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control}>Subscribe</Button>
        </div>
      </div>
      <Image src={"https://img.freepik.com/free-photo/paper-craft-art-inbox-notification_53876-75078.jpg?w=826&t=st=1705886498~exp=1705887098~hmac=44674f1bc8bc06243b9db702f156f2b4c1c048cc42fba1d901bf00b21b66e93b"} className={classes.image} />
    </div>
    </Container>
  );
}