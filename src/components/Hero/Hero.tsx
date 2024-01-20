import { Overlay, Container, Title, Button, Text, List, ThemeIcon, Group, Image } from '@mantine/core';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title} mb={'lg'}>Quality <span className={classes.highlight}>Cleaning</span> <br /> Services for a Healthier Living.</Title>
        <Text className={classes.description} mb={'md'} size="xl">
        Experience Quality Cleaning Services for a healthier living or working space. Meticulous attention to detail, eco-friendly practices, and exceptional results.
        </Text>
        {/* <List
      size="sm"
      icon={
        <ThemeIcon size={15} radius="xl">
          
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
    </List> */}
        <div>
  <a className={classes.effect1} href="#">
    Let's Go!
    <span className={classes.bg}></span>
  </a>
</div>
      </Container>
    </div>
  );
}
