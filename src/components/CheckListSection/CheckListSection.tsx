import React from "react";
import { ChecklistCard } from "../Cards/ChecklistCard";
import { CheckListData } from "~/types/LandingPagePropsType";
import { Container, Group } from "@mantine/core";
import { checkListData } from "~/data/cleaningCategory";


const CheckListSection = () => {
  const data : CheckListData = checkListData;
  console.log(data);
  return (
    <Container pt={'xl'} mt={'xl'}>
        <Group align={"baseline"} grow>
            { data.map((e)=>( 
            <ChecklistCard key={e.header} imageUrl={e.imageUrl} header={e.header} points={e.points} crossForm={e.crossForSection} />)
            )}
        </Group>
      </Container>
  );
};

export default CheckListSection;
