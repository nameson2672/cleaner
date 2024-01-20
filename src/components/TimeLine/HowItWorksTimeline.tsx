import { Image,Timeline, Text, Container, Title, Grid } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots, IconPhoneCall, IconCalendarClock, IconCar, IconCash } from '@tabler/icons-react';
import classes from "./HowItWorksTimeline.module.css";

export function HowItWorksTimeline() {
  return (
    <Container className={classes.container} >
      <Grid id="faq-grid" gutter={50}>
      <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={"https://res.cloudinary.com/ddxsatvd0/image/upload/v1705600639/cleaners/wepik-export-20240118173847ywmF_kc9ovj.png"} alt="Frequently Asked Questions" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
    <Title order={3} size={"h1"} m={'xl'}>How its work!</Title>
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconPhoneCall size={12} />} title="Call">
        <Text c="dimmed" size="sm">Give us a call to discuss your cleaning needs.</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconCalendarClock size={12} />} title="Book">
        <Text c="dimmed" size="sm">Book a schedule that suits your time.</Text>
      </Timeline.Item>

      <Timeline.Item title="We Arrive" bullet={<IconCar size={12} />} lineVariant="dashed">
        <Text c="dimmed" size="sm">Our professional cleaner arrives at your location.</Text>
      </Timeline.Item>

      <Timeline.Item title="Pay" bullet={<IconCash size={12} />}>
        <Text c="dimmed" size="sm">Pay after the service is completed.</Text>
      </Timeline.Item>
    </Timeline>
    </Grid.Col>
          
        </Grid>
    </Container>
  );
}