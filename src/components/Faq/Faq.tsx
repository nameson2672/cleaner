import { Image, Accordion, Grid, Container, Title } from '@mantine/core';
import image from './image.svg';
import classes from './Faq.module.css';

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';

export function Faq() {
  return (
    <div className={classes.wrapper}>
      <Container >
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes.title} mt={'xl'} pt={'xl'}> 
              Frequently Asked Questions
            </Title>

            <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>How can I reset my password?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>Can I create more that one account?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>
                  Do you store credit card information securely?
                </Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={"https://res.cloudinary.com/ddxsatvd0/image/upload/v1705520335/cleaners/wepik-export-202401171937001sBX_sehuyk.png"} alt="Frequently Asked Questions" />
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}