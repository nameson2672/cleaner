import { Text, Box, HoverCard, Title, Center } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Image } from "@mantine/core";
import classes from "./CustomClickChangeCard.module.css";
import { CustomClickChangeCardProp, SelectedPackageInfo } from "~/types/CustomClickChangeCardProps";

function CustomClickChangeCard({
  imageUrl,
  name,
  description,
  price,
  selection,
  setSelection
}: CustomClickChangeCardProp) {
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    if(isSelected){
      setSelection([...selection, {imageUrl, name, price, description} as SelectedPackageInfo ])
    }
    else if (!isSelected){
      setSelection(pre=>pre.filter(item => item.name !== name))
    }
  }, [isSelected])
  
  return (
    <div className={classes.mainComponent}>
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Box
            onClick={() => setIsSelected(!isSelected)}
            w={"150px"}
            h={"150px"}
            p={'lg'}
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
          <Text size="xs">{description}</Text>
        </HoverCard.Dropdown>
      </HoverCard>
      <Center mt={"sm"}>
        <Text size="xs">{name}</Text>
      </Center>
    </div>
  );
}

export default CustomClickChangeCard;
