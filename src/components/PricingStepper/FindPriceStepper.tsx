import { useEffect, useState } from "react";
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
import {
  type SelectedPackageInfo,
  type CustomClickChangeCardProp,
} from "~/types/CustomClickChangeCardProps";
import Invoice from "../Invoice/Invoice";

export default function FindPriceStepper() {
  const data = CustomClean as CustomClickChangeCardProp[];
  const form = useForm({
    initialValues: {
      noOfBedrooms: 0,
      noOfBathrooms: "",
      noOfHalfBathrooms: "",
      area: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      dateTimeToArrive: "",
      note: "",
      garbageInfo: "",
      suit: "",
      selectedPackage: [""],
    },
    validate: {
      phone: (value) =>
        value.length < 10 ? "Please provide the valid number" : null,
      dateTimeToArrive: (value) =>
        Date.parse(value) < Date.now() ? "Please provide the valid date" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  const [selectedPackage, setSelectedPackage] = useState<SelectedPackageInfo[]>(
    []
  );
  const items = [
    { description: "Widget", quantity: 2, price: 10 },
    { description: "Gadget", quantity: 1, price: 20 },
    { description: "Thingamajig", quantity: 3, price: 15 },
  ];
  const total = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  useEffect(() => {
    console.log(selectedPackage);
  }, [selectedPackage]);

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <Container>
        <Box className={classes.step1}>
          <Title c={"yellow"} order={4}>
            "What type of Cleaning you need?"
          </Title>
          <Text mt={"md"}>
            Welcome to our cleaning services! We offer two distinct options to
            meet your cleaning needs:
          </Text>
          <Text mt={"md"} fw={700}>
            {"House Cleaning Packages:"}
          </Text>
          <Text>
            "Tailored for a thorough and complete cleaning for your entire home.
            Choose from various packages designed to provide a complete solution
            for a clean and inviting living space."
          </Text>
          <Text mt={"md"} fw={700}>
            "Hourly Cleaning Service"
          </Text>
          <Text >
            Provides flexibility and customization to meet your specific needs.
            Whether you need a quick touch-up or a deep clean for specific
            areas, our team is dedicated to delivering exceptional service.
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
                  { value: '"0"', label: "0 Bedroom" },
                  { label: "1 Bedroom", value: "1" },
                  { label: "1.5 Bedroom", value: "1.5" },
                  { label: "2 Bedroom", value: "2" },
                  { label: "2.5 Bedroom", value: "2.5" },
                  { label: "3 Bedroom", value: "3" },
                  { label: "3.5 Bedroom", value: "3.5" },
                  { label: "4 Bedroom", value: "4" },
                  { label: "4.5 Bedroom", value: "4.5" },
                  { label: "5 Bedroom", value: "5" },
                  { label: "5.5 Bedroom", value: "5.5" },
                  { label: "6 Bedroom", value: "6" },
                  { label: "6.5 Bedroom", value: "6.5" },
                  { label: "7 Bedroom", value: "7" },
                  { label: "7.5 Bedroom", value: "7.5" },
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
                  { label: "0 Bathroom", value: "0" },
                  { label: "1 Bathroom", value: "1" },
                  { label: "2 Bathroom", value: "2" },
                  { label: "3 Bathroom", value: "3" },
                  { label: "4 Bathroom", value: "4" },
                  { label: "5 Bathroom", value: "5" },
                  { label: "6 Bathroom", value: "6" },
                  { label: "7 Bathroom", value: "7" },
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
                  { label: "500-999 Sqft", value: "500-999" },
                  { label: "1000-1499 Sqft", value: "1000-1499" },
                  { label: "1500-1999 Sqft", value: "1500-1999" },
                  { label: "2000-2499 Sqft", value: "2000-2499" },
                  { label: "2500-2999 Sqft", value: "2500-2999" },
                  { label: "3000-3499 Sqft", value: "3000-3499" },
                  { label: "3500-3999 Sqft", value: "3500-3999" },
                  { label: "4000-4499 Sqft", value: "4000-4499" },
                  { label: "4500-4999 Sqft", value: "4500-4999" },
                  { label: "5000-5499 Sqft", value: "5000-5499" },
                  { label: "5500-55944 Sqft", value: "5500-55944" },
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
                  { label: "0 Half Bathrooms", value: "0" },
                  { label: "1 Half Bathrooms", value: "1" },
                  { label: "2 Half Bathrooms", value: "2" },
                  { label: "3 Half Bathrooms", value: "3" },
                  { label: "4 Half Bathrooms", value: "4" },
                  { label: "5 Half Bathrooms", value: "5" },
                  { label: "6 Half Bathrooms", value: "6" },
                  { label: "7 Half Bathrooms", value: "7" },
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
                price={0}
                description={e.description}
                selection={selectedPackage}
                setSelection={setSelectedPackage}
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
                {...form.getInputProps("firstName")}
                placeholder="Type your first name here...."
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <TextInput
                label="Last Name"
                {...form.getInputProps("lastName")}
                placeholder="Type your last name here...."
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <TextInput
                label="Email"
                {...form.getInputProps("email")}
                placeholder="Email"
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <TextInput
                label="Phone Number"
                {...form.getInputProps("phone")}
                placeholder="Phone number"
              />
            </Grid.Col>
          </Grid>
        </Box>
        <Divider my={"lg"} />
        <Box className={classes.step4}>
          <Title c={"yellow"} order={4}>
            Where and when?
          </Title>
          <Text size="md" c="dimmed">
            {"Kindly provide the location details for the property requiring cleaning."}
          </Text>
          <Grid columns={8} mt={"md"}>
            <Grid.Col span={5}>
              <TextInput
                label="Address"
                {...form.getInputProps("address")}
                placeholder="Address...."
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <TextInput
                label="Apt/Suite"
                {...form.getInputProps("suit")}
                placeholder="Apartment and Suit Number..."
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <TextInput
                label="City"
                {...form.getInputProps("city")}
                placeholder="City"
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <TextInput
                label="Postal Code"
                {...form.getInputProps("postalCode")}
                placeholder="Postal Code here.."
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <DateTimePicker
                label="Date and time to arrive"
                withAsterisk
                {...form.getInputProps("dateTimeToArrive")}
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
            Kindly furnish information regarding property access, including
            keypad codes, parking details, and any additional particulars you
            deem important for us to be aware of in relation to your residence.
          </Text>
          <Grid mt={"md"} columns={8}>
            <Grid.Col span={6}>
              <Textarea
                label="Note"
                {...form.getInputProps("note")}
                placeholder="Anything you think we should know..."
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <TextInput
                {...form.getInputProps("garbageInfo")}
                label="About Garbage"
                placeholder="Where should we place the collected garbage at the property?"
              />
            </Grid.Col>
          </Grid>
        </Box>
        <Divider my={"lg"} />

        <Invoice />
        {!form.isValid()
          ? Object.keys(form.errors).map((val, key) => (
              <Text c={"red"} key={key}>
                *{form.errors[val]}
              </Text>
            ))
          : ""}
        <Button
          type="submit"
          my={"xl"}
          size={"lg"}
          fullWidth
          disabled={!form.isValid() ? true : false}
        >
          Book Now
        </Button>
      </Container>
    </form>
  );
}
