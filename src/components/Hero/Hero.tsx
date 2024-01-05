import { Image, Container, Title, Button, Group, Text, List, ThemeIcon } from '@mantine/core';
import image from '@/public/hero.svg';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
          Quality <span className={classes.highlight}>Cleaning</span> <br /> Services for a Healthier Living.
          </Title>
          <Text c="dimmed" mt="md">
          Experience Quality Cleaning Services for a healthier living or working space. Meticulous attention to detail, eco-friendly practices, and exceptional results.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Expertise you can trust</b> – Our highly trained cleaners deliver professional expertise, utilizing advanced techniques and eco-friendly products for thorough cleaning.
            </List.Item>
            <List.Item>
              <b>Reliable and vetted professionals</b> – Rest easy knowing our trustworthy team is thoroughly vetted, providing you with a secure and worry-free cleaning experience.
            </List.Item>
            <List.Item>
              <b>Customized solutions for your needs</b> –  We offer tailored cleaning services to fit your schedule and specific preferences, ensuring your space is cleaned to your satisfaction.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
            Book now !
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Source code
            </Button>
          </Group>
        </div>
        <Image src={"https://res.cloudinary.com/ddxsatvd0/image/upload/v1704141789/yghnaj8uzphga3am8jvh.jpg"} className={classes.image} />
      </div>
    </Container>
  );
}