import { Image, Text, Container, ThemeIcon, Title, SimpleGrid, Overlay } from '@mantine/core';
import classes from './WhyUs.module.css';

const data = [
  {
    image: 'https://res.cloudinary.com/ddxsatvd0/image/upload/v1705616718/cleaners/best-seller_5970902_mqtgrq.png',
    title: 'Professional Service',
    description: 'Our team consists of highly trained professionals, ensuring every cleaning task is completed to the highest standards.',
  },
  {
    image: 'https://res.cloudinary.com/ddxsatvd0/image/upload/v1705616718/cleaners/save-money_1611179_qejbjr.png',
    title: 'Affordable Prices',
    description: "We offer a top-notch cleaning service at a price that won't break the bank. Quality doesn't always have to be expensive.",
  },
  {
    image: 'https://res.cloudinary.com/ddxsatvd0/image/upload/v1706474816/stopwatch_9645301_z4ocdz.png',
    title: 'Quick Response',
    description: 'We understand that your time is valuable. Our team is committed to providing fast and efficient cleaning services to meet your needs.',
  },
  {
    image: 'https://res.cloudinary.com/ddxsatvd0/image/upload/v1706474695/transition_12494926_byd8nf.png',
    title: 'Reliable',
    description: 'You can count on us to arrive on time and complete our work in a thorough and timely manner. Customer satisfaction is our priority.',
  },
];

export function WhyUs() {
    const items = data.map((item) => (
        <div className={classes.item} key={item.image}>
          <ThemeIcon color="" variant="light" className={classes.itemIcon} size={60} radius="md">
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
            Put your faith in us for your cleaning requirements. We assure you of professional, cost-effective, and quick services, always with your satisfaction at the forefront of our priorities.
            </Text>
          </Container>
    
          <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
            {items}
          </SimpleGrid>
        </Container>
        </div>
      );
    }