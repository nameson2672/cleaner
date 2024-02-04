import React from 'react'
import { ContactUs } from '~/components/Contact/ContactUs'
import Layout from './layout';

function contactUs() {
  return (
    <div><ContactUs /></div>
  )
}

contactUs.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default contactUs