import Layout from "./layout";
import { Hero } from "~/components/Hero/Hero";
import { FeaturesSection } from "~/components/FetureSection/FetureSectin";
import CheckListSection from "~/components/CheckListSection/CheckListSection";
import { ReactElement } from "react";
export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <CheckListSection />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};