import { ReactElement, useState } from "react";
import NextImage from "next/image";
import Layout from "./layout";
import LandingPageCard from "~/components/landingPageCard";
import { Hero } from "~/components/Hero/Hero";

interface IHome {
  props: {
    checkListDat: CheckListData;
  };
}
export default function Home({
  checkListDat,
}: {
  checkListDat: CheckListData;
}) {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <CheckListSection  {...checkListDat}/>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

import fs from "fs";
import path from "path";
import { CheckListData } from "~/types/LandingPagePropsType";
import { FeaturesSection } from "~/components/FetureSection/FetureSectin";
import { ChecklistCard } from "~/components/Cards/ChecklistCard";
import { Container, Group } from "@mantine/core";
import CheckListSection from "~/components/CheckListSection/CheckListSection";

const filePath = path.join(process.cwd(), "/src/data/cleaningCategory.json");

export async function getStaticProps() {
  try {
    const fileContents = fs.readFileSync(filePath, "utf-8");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const checkListDat: CheckListData = JSON.parse(fileContents);
    return {
      props: {
        checkListDat,
      },
    };
  } catch (error) {
    console.error("Error reading or parsing the file:", error);

    return {
      props: {
        checkListData: null,
      },
    };
  }
}
