import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Text,
  Select,
  SimpleGrid,
  TextInput,
  Textarea,
  Title,
  Divider,
  Button,
} from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import classes from "./FindPriceStepper.module.css";
import CustomClickChangeCard from "../CustomClickChangeCard/CustomClickChangeCard";
import { CustomClean } from "~/data/CustomClean";
import { type CustomClickChangeCardProp } from "~/types/CustomClickChangeCardProps";
import Invoice from "../Invoice/Invoice";

export default function FindPriceStepper() {
  const [active, setActive] = useState(1);
  const data = CustomClean as CustomClickChangeCardProp[];
  const form = useForm({
    initialValues: {
      noOfBedrooms: "",
      noOfBathrooms: "",
      noOfHalfBathrooms: "",
      area: "",
    },
  });
  const items = [
    { description: "Widget", quantity: 2, price: 10 },
    { description: "Gadget", quantity: 1, price: 20 },
    { description: "Thingamajig", quantity: 3, price: 15 },
  ];

  const total = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  return (
    <Container>
      <Box className={classes.step1}>
        <Title c={"yellow"} order={4}>
          What type of Cleaning you need?
        </Title>
        <Text mt={"md"}>
          Welcome to our cleaning services! We offer two distinct options to
          meet your cleaning needs:
        </Text>
        <Text mt={"md"} fw={700}>
          House Cleaning Packages:
        </Text>
        <Text>
          Tailored for a thorough and complete cleaning for your entire home.
          Choose from various packages designed to provide a complete solution
          for a clean and inviting living space.
        </Text>
        <Text mt={"md"} fw={700}>
          Hourly Cleaning Service:
        </Text>
        <Text>
          Provides flexibility and customization to meet your specific needs.
          Whether you need a quick touch-up or a deep clean for specific areas,
          our team is dedicated to delivering exceptional service.
        </Text>
        <Select
          mt={"md"}
          label="Available Packages"
          data={["House Cleaning Package", "Hourly Cleaning Service"]}
          min={1}
          placeholder="Select package according to your need"
          withAsterisk
          description="House cleaning is used for apartment cleaning"
          {...form.getInputProps("noOfBedrooms")}
        />
        <Divider my="md" />
        <Grid columns={8}>
          <Grid.Col span={4}>
            <Select
              label="Bedrooms"
              placeholder="Number of Bedrooms"
              data={[
                "0 Bedroom",
                "1 Bedroom",
                "1.5 Bedroom",
                "2 Bedroom",
                "2.5 Bedroom",
                "3 Bedroom",
                "3.5 Bedroom",
                "4 Bedroom",
                "4.5 Bedroom",
                "5 Bedroom",
                "5.5 Bedroom",
                "6 Bedroom",
                "6.5 Bedroom",
                "7 Bedroom",
                "7.5 Bedroom",
              ]}
              min={1}
              withAsterisk
              description="Bedroom with small room inside it count as 1.5 bedroom"
              {...form.getInputProps("noOfBedrooms")}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Select
              label="Bathrooms"
              placeholder="Number of Bathrooms"
              data={[
                "0 Bathroom",
                "1 Bathroom",
                "2 Bathroom",
                "3 Bathroom",
                "4 Bathroom",
                "5 Bathroom",
                "6 Bathroom",
                "7 Bathroom",
              ]}
              min={1}
              mt="md"
              withAsterisk
              {...form.getInputProps("noOfBathrooms")}
            />
          </Grid.Col>

          <Grid.Col mt={"md"} span={4}>
            <Select
              label="Area in sqft"
              withAsterisk
              description="This is the expected area of a room"
              placeholder="Area of the cleaning place"
              data={[
                "500-999 Sqft",
                "1000-1499 Sqft",
                "1500-1999 Sqft",
                "2000-2499 Sqft",
                "2500-2999 Sqft",
                "3000-3499 Sqft",
                "3500-3999 Sqft",
                "4000-4499 Sqft",
                "4500-4999 Sqft",
                "5000-5499 Sqft",
                "5500-55944 Sqft",
              ]}
              {...form.getInputProps("area")}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Select
              label="Half Bathrooms"
              placeholder="Number of half bathrooms"
              min={1}
              mt="md"
              withAsterisk
              data={[
                "0 Half Bathrooms",
                "1 Half Bathrooms",
                "2 Half Bathrooms",
                "3 Half Bathrooms",
                "4 Half Bathrooms",
                "5 Half Bathrooms",
                "6 Half bathrooms",
                "7 Half Bathrooms",
              ]}
              description="Bathrooms having a skink and a toilet is called half bathrooms"
              {...form.getInputProps("noOfHalfBathrooms")}
            />
          </Grid.Col>
        </Grid>
      </Box>
      <Divider my="lg" />

      <Box className={classes.step2}>
        <Title c={"yellow"} order={4}>
          Customize your cleaning need?
        </Title>
        <Text>
          We understand that every home is unique, and so are your cleaning
          needs. Tailor your cleaning experience by selecting from a range of
          features that best suit your requirements.
        </Text>
        <SimpleGrid mt={"xl"} cols={{ base: 1, sm: 5 }} spacing={10}>
          {data.map((e) => (
            <CustomClickChangeCard
              imageUrl={e.imageUrl}
              name={e.name}
              description={e.description}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Divider my={"lg"} />
      <Box className={classes.step3}>
        <Title c={"yellow"} order={4}>
          Your contact info
        </Title>
        <Text size="md" c="dimmed">
          This data will be utilized to communicate with you regarding your
          requested service.
        </Text>
        <Grid mt={"md"} columns={8}>
          <Grid.Col span={3}>
            <TextInput
              label="First Name"
              placeholder="Type your first name here...."
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <TextInput
              label="Last Name"
              placeholder="Type your last name here...."
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <TextInput label="Email" placeholder="Email" />
          </Grid.Col>
          <Grid.Col span={3}>
            <TextInput label="Phone Number" placeholder="Phone number" />
          </Grid.Col>
        </Grid>
      </Box>
      <Divider my={"lg"} />
      <Box className={classes.step4}>
        <Title c={"yellow"} order={4}>
          Where and when?
        </Title>
        <Text size="md" c="dimmed">
          Kindly provide the location details for the property requiring
          cleaning.
        </Text>
        <Grid columns={8} mt={"md"}>
          <Grid.Col span={5}>
            <TextInput label="Address" placeholder="Address...." />
          </Grid.Col>
          <Grid.Col span={2}>
            <TextInput
              label="Apt/Suite"
              placeholder="Apartment and Suit Number..."
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput label="City" placeholder="City" />
          </Grid.Col>
          <Grid.Col span={3}>
            <TextInput label="Postal Code" placeholder="Postal Code here.." />
          </Grid.Col>
          <Grid.Col span={3}>
            <DateTimePicker
              label="Date and time to arrive"
              withAsterisk
              description="Input description"
              placeholder="Input placeholder"
            />
          </Grid.Col>
        </Grid>
      </Box>
      <Divider my={"lg"} />
      <Box className={classes.step5}>
        <Title c={"yellow"} order={4}>
          Special note?
        </Title>
        <Text size="md" c="dimmed">
          Kindly furnish information regarding property access, including keypad
          codes, parking details, and any additional particulars you deem
          important for us to be aware of in relation to your residence.
        </Text>
        <Grid mt={"md"} columns={8}>
          <Grid.Col span={6}>
            <Textarea
              label="Note"
              placeholder="Anything you think we should know..."
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <TextInput
              label="About Garbage"
              placeholder="Where should we place the collected garbage at the property?"
            />
          </Grid.Col>
        </Grid>
      </Box>
      <Divider my={"lg"} />

      <Invoice />
      <Button my={'xl'} size={'lg'} fullWidth>Book Now</Button>
    </Container>
  );
}
