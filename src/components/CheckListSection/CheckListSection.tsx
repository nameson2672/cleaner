import React from "react";
import { ChecklistCard } from "../Cards/ChecklistCard";
import { CheckListData } from "~/types/LandingPagePropsType";
import { Container, Group } from "@mantine/core";

const CheckListSection = (checkListData : CheckListData) => {
    console.log(checkListData);
  return (
    <Container>
        <Group grow>
            {checkListData[0] && 
          <ChecklistCard imageUrl={checkListData[0].imageUrl} header={checkListData[0].header} points={checkListData[0].points} crossForm={0} />
            }
        </Group>
      </Container>
  );
};

export default CheckListSection;
