import React, {type ReactElement } from 'react'
import { ContactUs } from '~/components/Contact/ContactUs'
import Layout from './layout';
import Head from 'next/head';

function contactUs() {
  return (
    <div>
            <Head>
<title>SopyMoph Cleaners - Homepage</title>
<meta name="description" content="Experience Quality Cleaning Services for a healthier living or working space. Meticulous attention to detail, eco-friendly practices, and exceptional results."/>

 {/* Facebook Meta Tags */}
<meta property="og:url" content={process.env.VERCEL_URL}/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="SopyMoph Cleaners - Homepage"/>
<meta property="og:description" content="House Cleaning, Renovation Clean, Rental Cleaning, Move Out Cleaning, 
Deep Cleaning, Condo Cleaning. Experience Quality Cleaning Services for a healthier living or working space. Meticulous attention to detail, eco-friendly practices, and exceptional results." />
<meta property="og:image" content="https://res.cloudinary.com/ddxsatvd0/image/upload/v1704157335/cleaners/nhwmljpglylfm7b3nfhk.jpg" />

{/* Twitter Meta Tags */}
<meta name="twitter:card" content="SopyMoph Cleaners - Homepage" />
<meta property="twitter:domain" content={process.env.VERCEL_URL} />
<meta property="twitter:url" content={process.env.VERCEL_URL} />
<meta name="twitter:title" content="SopyMoph Cleaners - Homepage" />
<meta name="twitter:description" content="House Cleaning, Renovation Clean, Rental Cleaning, Move Out Cleaning, 
Deep Cleaning, Condo Cleaning. Experience Quality Cleaning Services for a healthier living or working space. Meticulous attention to detail, eco-friendly practices, and exceptional results." />
<meta name="twitter:image" content="https://res.cloudinary.com/ddxsatvd0/image/upload/v1704157335/cleaners/nhwmljpglylfm7b3nfhk.jpg" />

      </Head>
      <ContactUs /></div>
  )
}

contactUs.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default contactUs