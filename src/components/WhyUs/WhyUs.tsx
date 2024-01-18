import { Image, Text, Container, ThemeIcon, Title, SimpleGrid, Overlay } from '@mantine/core';
import classes from './WhyUs.module.css';

const data = [
  {
    image: 'https://res.cloudinary.com/ddxsatvd0/image/upload/v1705616718/cleaners/best-seller_5970902_mqtgrq.png',
    title: 'Professional',
    description: 'Azurill can be seen bouncing and playing on its big, rubbery tail',
  },
  {
    image: 'https://res.cloudinary.com/ddxsatvd0/image/upload/v1705616718/cleaners/save-money_1611179_qejbjr.png',
    title: 'Cheap',
    description: 'Fans obsess over the particular length and angle of its arms',
  },
  {
    image: 'https://res.cloudinary.com/ddxsatvd0/image/upload/v1705616718/cleaners/performance_7172783_ngnjca.png',
    title: 'Fast',
    description: 'They divvy up their prey evenly among the members of their pack',
  },
  {
    image: 'https://res.cloudinary.com/ddxsatvd0/image/upload/v1705616718/cleaners/performance_7172783_ngnjca.png',
    title: 'Others',
    description: 'Phanpy uses its long nose to shower itself',
  },
];

export function WhyUs() {
    const items = data.map((item) => (
        <div className={classes.item} key={item.image}>
          <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
            <Image  src={item.image} />
          </ThemeIcon>
    
          <div>
            <Text fw={700} fz="lg" c={'white'} className={classes.itemTitle}>
              {item.title}
            </Text>
            <Text c="white">{item.description}</Text>
          </div>
        </div>
      ));
    
      return (
        
        <div className={classes.wrapperLarge}>
        <Container size={700} className={classes.wrapper}>
          <Title c='white' size={"h1"} className={classes.title} order={2}>
            Why <span className={classes.highlight}>us ?</span>
          </Title>
    
          <Container size={660} p={0}>
            <Text c="white" className={classes.description}>
              Its lungs contain an organ that creates electricity. The crackling sound of electricity
              can be heard when it exhales. Azurill’s tail is large and bouncy. It is packed full of the
              nutrients this Pokémon needs to grow.
            </Text>
          </Container>
    
          <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
            {items}
          </SimpleGrid>
        </Container>
        </div>
      );
    }