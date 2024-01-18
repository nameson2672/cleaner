import Layout from "./layout";
import { Hero } from "~/components/Hero/Hero";
import { FeaturesSection } from "~/components/FetureSection/FetureSectin";
import CheckListSection from "~/components/CheckListSection/CheckListSection";
import { ReactElement } from "react";
import { HowItWorksTimeline } from "~/components/TimeLine/HowItWorksTimeline";
import { ContactUs } from "~/components/Contact/ContactUs";
import { Faq } from "~/components/Faq/Faq";
export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <HowItWorksTimeline />
      <CheckListSection />
      <Faq />
      <ContactUs />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};