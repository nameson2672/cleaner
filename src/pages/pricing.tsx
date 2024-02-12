import React, { type ReactElement } from 'react'
import Layout from './layout';
import FindPriceStepper from '~/components/PricingStepper/FindPriceStepper';
import { Container } from '@mantine/core';

function Pricing() {
  return (

    <Container>
      <FindPriceStepper />
    </Container>
  )
}

Pricing.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
  };
export default Pricing