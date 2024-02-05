import { Text, Box, HoverCard, Title, Center } from "@mantine/core";
import React, { useState } from "react";
import { Image } from "@mantine/core";
import classes from "./CustomClickChangeCard.module.css";
import { CustomClickChangeCardProp } from "~/types/CustomClickChangeCardProps";

function CustomClickChangeCard({
  imageUrl,
  name,
  description,
}: CustomClickChangeCardProp) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className={classes.mainComponent}>
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Box
            onClick={() => setIsSelected(!isSelected)}
            w={"150px"}
            h={"100px"}
            className={
              isSelected === true
                ? classes.mainContainerClicked
                : classes.mainContainer
            }
          >
            {<Image w={"100px"} src={imageUrl} />}
          </Box>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">{description}</Text>
        </HoverCard.Dropdown>
      </HoverCard>
      <Center mt={"sm"}>
        <Text size="md">{name}</Text>
      </Center>
    </div>
  );
}

export default CustomClickChangeCard;
