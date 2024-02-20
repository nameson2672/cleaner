import React from "react";
import { Text, Group, Container, Paper, Divider } from "@mantine/core";
import classes from "./Invoice.module.css";
import { IconCalendarPin, IconUser } from "@tabler/icons-react";


export interface InvoicePropType {
packageData: PerPackageInfo[];
name: string;
email: string;
dateTimeToArrive: Date;
address:string;
}

export interface PerPackageInfo {
  title: string;
  amount: number;
}

const Invoice = (invoiceData: InvoicePropType) => {
  let total = 0;
  invoiceData.packageData.forEach(e=>{
    total+=e.amount;
  })
  return (
    <Container ml={0} pl={0} mb={'lg'} size={'xs'} >
      <Paper withBorder shadow="xl" p="xl">
        <Text fz="lg" className={classes.title} fw={500}>
          Booking Summery
        </Text>
        <Text fz="xs" c="dimmed" mt={3} mb="xl">
          Booking invoice will be provided through mail
        </Text>
        {invoiceData.packageData.map((item) => (
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
        <Divider mt={'sm'} size={'xs'} />
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
                <span className={classes.value}>{invoiceData.address}</span>
              </Text>
              <Text fz="xs" className={classes.count}>
                <span className={classes.value}>{invoiceData.dateTimeToArrive?.toDateString()}</span>
              </Text>
            </div>
            <div>
              <IconUser
              />
              <Text className={classes.label}>{"Booked by:"}</Text>
              <Text fz="xs" className={classes.count}>
                <span className={classes.value}>{invoiceData.name}</span>
              </Text>
              <Text fz="xs" className={classes.count}>
                <span className={classes.value}>{invoiceData.email}</span>
              </Text>
            </div>
          </Group>
        </Paper>

      </Paper>
    </Container>
  );
};

export default Invoice;
