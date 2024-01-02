import React from "react";
import {Card, CardHeader, CardBody, Image, CardFooter} from "@nextui-org/react";
import { LandingPagePropsType } from "~/types/LandingPagePropsType";

export default function LandingPageCard({ id, imageUrl, body, header }:LandingPagePropsType) {
  return (
    <Card id={id} className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{header}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
            isZoomed
          alt="Card background"
          className="object-cover rounded-xl"
          src={imageUrl}
          width={270}
        />
      </CardBody>
      <CardFooter>
      <p className="text-tiny w-60 font-bold">{body}</p>
      </CardFooter>
    </Card>
  );
}
