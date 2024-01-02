import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { Button, Divider, Image, Input, Select, SelectItem } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/src/config/site";
import { title, subtitle } from "@/src/components/primitives";
import { GithubIcon } from "@/src/components/icons";
import { ReactElement, useState } from "react";
import NextImage from "next/image";
import Layout from "./layout";
import LandingPageCard from "~/components/landingPageCard";

export default function Home() {

  return (
    <div>
    <div className="flex gap-4 justify-end">
    <div className="flex justify-between">
    <section className="flex flex-col items-center w-unit-9xl justify-center gap-4 py-8 md:py-10">
      <div className="inline-block w-full text-start justify-center">
        <h1 className={title()}>Make&nbsp; Life </h1>
        <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
        <br />
        <h1 className={title()}>
        with clean house
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
        with Toronto Cleaners.
        </h2>
      </div>

      <div className="flex flex-col w-full justify-between gap-3">
        <div className="flex gap-4 w-full justify-between">
        <Input type="email" fullWidth={true} label="Email" />
        <Input type="email" label="Phone" fullWidth={true}/>
        </div>
        <div className="flex gap-4 w-full justify-between">
        <Select
            size={"sm"}
            label="No of bedroom"
            placeholder="Select an no of bedrooms"
            className="max-w-xs"
          >
            
              <SelectItem key={1} value={1}>
                1
              </SelectItem>
          </Select>
          <Select
            size={"sm"}
            label="No of bathroom"
            placeholder="Select an no of bathrooms"
            className="max-w-xs"
          >
            
              <SelectItem key={1} value={1}>
                1
              </SelectItem>
              <SelectItem key={2} value={1.2}>
                1.5
              </SelectItem>
              <SelectItem key={3} value={2}>
                2
              </SelectItem>
          </Select>
        </div>
        <div className="w-full">
          <Button className="w-full mt-3 uppercase font-bold text-large" color="primary" variant="solid">
        Get A free quote
      </Button>
          </div>
      </div>

      <div className="mt-8">
        
      </div>
    </section>
    </div>
    <Image
    className="clip-hero-image "
      width={1000}
      height={600}
      radius="none"
      alt="NextUI hero Image"
      src="https://res.cloudinary.com/ddxsatvd0/image/upload/v1704141789/yghnaj8uzphga3am8jvh.jpg"
    />
    </div>
    <Divider />
    <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      <div className="flex flex-wrap gap-6 justify-center">
      {[0,1,2,3,4,5].map(()=>(
        <LandingPageCard />
      ))}
    </div>
    </div>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
