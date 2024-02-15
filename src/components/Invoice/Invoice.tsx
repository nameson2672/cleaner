import React from "react";
import { Text, Group, Container, Paper, Divider } from "@mantine/core";
import classes from "./Invoice.module.css";
import { IconCalendarPin, IconUser } from "@tabler/icons-react";

const Invoice = () => {
  const data = [
    {
      title: "Messages",
      amount: 2.66,
    },
    {
      title: "Review requests",
      amount: 2.66,
    },
    {
      title: "Comments",
      amount: 2.66,
    },
    {
      title: "Recommendations",
      amount: 2.66,
    },
  ];
  const total = 22;
  return (
    <Container ml={0} pl={0} mb={'lg'} size={'xs'} >
        <Paper withBorder  shadow="xl" p="xl">
      <Text fz="lg" className={classes.title} fw={500}>
        Booking Summery
      </Text>
      <Text fz="xs" c="dimmed" mt={3} mb="xl">
        Booking invoice will be provided through mail
      </Text>
      {data.map((item) => (
        <Group
          justify="space-between"
          className={classes.item}
          wrap="nowrap"
          key={item.title}
        >
          <div>
            <Text>{item.title}</Text>
          </div>
          <div>
            <Text>${item.amount}</Text>
          </div>
        </Group>
      ))}
      <Divider mt={'sm'} size={'xs'}/>
      <Group
          justify="space-between"
          className={classes.item}
          wrap="nowrap"
        >
          <div>
            <Text>Total</Text>
          </div>
          <div>
            <Text>${total}</Text>
          </div>
        </Group>
      <Paper mt={'sm'} withBorder radius="md" shadow="md" p="xs">
      <Group
          justify="space-between"
          className={classes.item}
          wrap="nowrap"
        >
      <div>
      <IconCalendarPin
      />
      
        <Text className={classes.label}>{"Booked for:"}</Text>
        <Text fz="xs" className={classes.count}>
          <span className={classes.value}>2024-Apr-02 01:00 PM</span>
        </Text>
      </div>
      <div>
      <IconUser
      />
        <Text className={classes.label}>{"Booked by:"}</Text>
        <Text fz="xs" className={classes.count}>
          <span className={classes.value}>Ram Lal</span>
        </Text>
        <Text fz="xs" className={classes.count}>
        <span className={classes.value}>ramLal@clean.com</span>
        </Text>
      </div>
      </Group>
    </Paper>

    </Paper>
    </Container>
  );
};

export default Invoice;
