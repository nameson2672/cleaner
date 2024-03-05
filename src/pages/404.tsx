import { Title, Text, Button, Container, Group } from '@mantine/core';
import classes from './404.module.css';
import { ReactElement } from 'react';
import Layout from './layout';

function NotFoundTitle() {
  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
        been moved to another URL.
      </Text>
      <Group justify="center">
        <Button component='a' href='/' variant="subtle" size="md">
          Take me back to home page
        </Button>
      </Group>
    </Container>
  );
}


NotFoundTitle.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
  };
  
  export default NotFoundTitle