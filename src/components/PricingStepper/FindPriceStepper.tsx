import { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  Text,
  Select,
  SimpleGrid,
  Stepper,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "./FindPriceStepper.module.css";
import CustomClickChangeCard from "../CustomClickChangeCard/CustomClickChangeCard";
import { CustomClean } from "~/data/CustomClean";
import { CustomClickChangeCardProp } from "~/types/CustomClickChangeCardProps";

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
  return (
    <Container>
      
<Box className={classes.step1}>
<Title order={4}>What type of Cleaning you need?</Title>
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
             
              <Grid.Col mt={'md'} span={4}> 
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
<Box className={classes.step2}>
<Title order={4}>Customize your cleaning need?</Title>
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
        <Box className={classes.step3}>
        <Title order={4}>Your contact info</Title>
          <Text size="md" c="dimmed" mt={'md'}>This data will be utilized to communicate with you regarding your requested service.</Text>
          <Grid columns={8}>
            <Grid.Col span={3}>
              <TextInput label="First Name" placeholder="Type your first name here...." />
            </Grid.Col>
            <Grid.Col span={3}>
              <TextInput label="Last Name" placeholder="Type your last name here...." />
            </Grid.Col>
            <Grid.Col span={3}>
            <TextInput label="Email" placeholder="Email" />
            </Grid.Col>
            <Grid.Col span={3}>
              <TextInput label="Phone Number" placeholder="Phone number" />
            </Grid.Col>
          </Grid>
        </Box>
        <Box className={classes.step4}>
        <Title order={4}>Where and when?</Title>
          <Text size="md" c="dimmed" mt={'md'}>Kindly provide the location details for the property requiring cleaning.</Text>
          <Grid columns={8}>
            <Grid.Col span={5}>
              <TextInput label="Address" placeholder="Address...." />
            </Grid.Col>
            <Grid.Col span={2}>
              <TextInput label="Apt/Suite" placeholder="Apartment and Suit Number..." />
            </Grid.Col>
            <Grid.Col span={4}>
            <TextInput label="City" placeholder="City" />
            </Grid.Col>
            <Grid.Col span={3}>
              <TextInput label="Postal Code" placeholder="Postal Code here.." />
            </Grid.Col>
          </Grid>
        </Box>
        <Box className={classes.step5}>
        <Title order={4}>Special note?</Title>
          <Text size="md" c="dimmed" mt={'md'}>Kindly furnish information regarding property access, including keypad codes, parking details, and any additional particulars you deem important for us to be aware of in relation to your residence.</Text>
          <Grid columns={8}>
            <Grid.Col span={6}>
              <Textarea label="Note" placeholder="Anything you think we should know..." />
            </Grid.Col>
            
            <Grid.Col span={6}>
            <TextInput label="About Garbage" placeholder="Where should we place the collected garbage at the property?" />
            </Grid.Col>
          </Grid>
        </Box>
    </Container>
  );
}
