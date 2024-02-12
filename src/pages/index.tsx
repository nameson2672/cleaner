import Layout from "./layout";
import { Hero } from "~/components/Hero/Hero";
import { FeaturesSection } from "~/components/FeatureSection/FeatureSection";
import CheckListSection from "~/components/CheckListSection/CheckListSection";
import { ReactElement } from "react";
import { HowItWorksTimeline } from "~/components/TimeLine/HowItWorksTimeline";
import { ContactUs } from "~/components/Contact/ContactUs";
import { Faq } from "~/components/Faq/Faq";
import { WhyUs } from "~/components/WhyUs/WhyUs";
export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <HowItWorksTimeline />
      <WhyUs />
      <CheckListSection />
      <Faq />
      <ContactUs />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};