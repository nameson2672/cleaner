import React from "react";
import {Card, CardHeader, CardBody, Image, CardFooter} from "@nextui-org/react";

export default function LandingPageCard() {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
            isZoomed
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://res.cloudinary.com/ddxsatvd0/image/upload/v1704141789/yghnaj8uzphga3am8jvh.jpg"
          width={270}
        />
      </CardBody>
      <CardFooter>
      <p className="text-tiny uppercase font-bold">Daily Mix</p>
      </CardFooter>
    </Card>
  );
}
