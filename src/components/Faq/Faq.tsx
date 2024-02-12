import { Image, Accordion, Grid, Container, Title } from "@mantine/core";
import classes from "./Faq.module.css";

const placeholder = [
  {
    question: "How do I get a quote for your cleaning services?",
    answer:
      "Getting a quote is easy! You can either fill out the online form on our website or give us a call. We'll ask a few questions to understand your cleaning needs and provide you with a personalized and transparent quote.",
  },
  {
    question: " Is your cleaning staff trained and trustworthy?",
    answer:
      "Yes, our cleaning staff undergoes thorough training, background checks, and is fully vetted before joining our team. We prioritize hiring trustworthy individuals to ensure the safety and security of your home or business.",
  },
  {
    question: "What measures do you have in place for COVID-19 safety?",
    answer:
      "We take the COVID-19 pandemic seriously and have implemented strict safety protocols. Our staff wears appropriate personal protective equipment (PPE), follows social distancing guidelines, and uses EPA-approved disinfectants to keep your environment safe.",
  },
  {
    question: "Do I need to be present during the cleaning process?",
    answer:
      " It's entirely up to you. Many clients provide us with access to their homes or businesses, while others prefer to be present. We are flexible and can work with your preferred arrangement to ensure a convenient and comfortable experience.",
  },
  {
    question: "How do you handle pets during the cleaning process?",
    answer:
      "We love pets! If you have pets, we'll work with you to ensure they are comfortable and secure during the cleaning. Just let us know about any specific instructions or concerns you have regarding your furry friends.",
  },
  {
    question: "Do you offer discounts for recurring services?",
    answer:
      "Absolutely! We offer special discounts for clients who choose our recurring cleaning services. Regular customers enjoy the benefit of cost savings along with the assurance of a consistently clean and well-maintained space.",
  },
];

export function Faq() {
  return (
    <div className={classes.wrapper}>
      <Container>
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title
              order={2}
              ta="left"
              className={classes.title}
              mt={"xl"}
              pt={"xl"}
            >
              Frequently Asked Questions
            </Title>

            <Accordion
              chevronPosition="right"
              defaultValue="reset-password"
              variant="separated"
            >
              {placeholder.map(e=>(
                  <Accordion.Item className={classes.item} value={e.answer}>
                  <Accordion.Control>
                    {e.question}
                  </Accordion.Control>
                  <Accordion.Panel>{e.answer}</Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src={
                "https://res.cloudinary.com/ddxsatvd0/image/upload/v1705520335/cleaners/wepik-export-202401171937001sBX_sehuyk.png"
              }
              alt="Frequently Asked Questions"
            />
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
