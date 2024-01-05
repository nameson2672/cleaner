import { ReactElement, useState } from "react";
import NextImage from "next/image";
import Layout from "./layout";
import LandingPageCard from "~/components/landingPageCard";
import { Hero } from "~/components/Hero/Hero";

interface IHome {
  props: {
    jsonData: LandingPagePropsType[];
  };
}
export default function Home({
  jsonData,
}: {
  jsonData: LandingPagePropsType[];
}) {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <Container>
        <Group grow>
          <ChecklistCard />
          <ChecklistCard />
          <ChecklistCard />
        </Group>
      </Container>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

import fs from "fs";
import path from "path";
import { LandingPagePropsType } from "~/types/LandingPagePropsType";
import { FeaturesSection } from "~/components/FetureSection/FetureSectin";
import { ChecklistCard } from "~/components/Cards/ChecklistCard";
import { Container, Group } from "@mantine/core";

const filePath = path.join(process.cwd(), "/src/data/landingPageCardInfo.json");

export async function getStaticProps() {
  try {
    const fileContents = fs.readFileSync(filePath, "utf-8");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const jsonData: LandingPagePropsType[] = JSON.parse(fileContents);
    return {
      props: {
        jsonData,
      },
    };
  } catch (error) {
    console.error("Error reading or parsing the file:", error);

    return {
      props: {
        jsonData: null,
      },
    };
  }
}
