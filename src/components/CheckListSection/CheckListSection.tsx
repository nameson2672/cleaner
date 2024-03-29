import React, { FC, useState } from "react";
import { ChecklistCard } from "../Cards/ChecklistCard";
import { type CheckListData, type CrossForSection } from "~/types/LandingPagePropsType";
import { Button, Center, Container, Group, Text, em } from "@mantine/core";
import { checkListData } from "~/data/cleaningCategory";
import { useMediaQuery } from '@mantine/hooks';


const CheckListSection = () => {
  const data: CheckListData = checkListData;
  const [selectedPackage, setSelectedPackage] = useState(1);
  const [packegeInfos, setPackageInfos] = useState(["Elevate your well-maintained home with our frequent and detailed standard cleaning service.", "Indulge in a thorough clean, ideal for those who prefer a less frequent, yet meticulous approach.", "Seamlessly transition with our move in/out cleaning, perfect for new beginnings or a tidy farewell."]);
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  
  const getMyType = (value: number) => {
    setSelectedPackage(value);
  };
  return (
    <>
    <Button.Group m={{base:'md', md:'sm',xs:'xs'}}>
        <Button
          size="lg"
          onClick={() => getMyType(1)}
          fullWidth
          variant={selectedPackage === 1 ? "filled" : "default"}
          value={1}
        >
          Stander Cleaning
        </Button>
        <Button
          size="lg"
          onClick={() => getMyType(2)}
          fullWidth
          variant={selectedPackage === 2 ? "filled" : "default"}
          value={2}
        >
          Deep Cleaning
        </Button>
        <Button
          size="lg"
          onClick={() => getMyType(3)}
          fullWidth
          variant={selectedPackage === 3 ? "filled" : "default"}
          value={3}
        >
          Move In/Out Cleaning
        </Button>
      </Button.Group>
    <Container pt={"md"}>
      <Center mb={'md'}>
      <Text fw={500} size="md">{packegeInfos[selectedPackage-1]}</Text>
      </Center>
      <Group align="stretch" grow={!isMobile}>
        {data.map((e) => (
          <ChecklistCard
            key={e.header}
            imageUrl={e.imageUrl}
            header={e.header}
            points={e.points}
            crossFromInt={getCrossFromInt()}
          />
        ))}
      </Group>
    </Container>
    </>
  );
};

const getCrossFromInt = ():number=>{
  return 5;
}

export default CheckListSection;
