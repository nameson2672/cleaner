import  { type ReactElement } from 'react'
import Layout from './layout';
import { FeaturesSection } from '~/components/FeatureSection/FeatureSection';
import { ServiceEmailBanner } from '~/components/ServiceEmailBanner/ServiceEmailBanner';

function Services() {
  return (
    <>
    <FeaturesSection />
    <ServiceEmailBanner />
    </>
  )
}
Services.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
  };

export default Services