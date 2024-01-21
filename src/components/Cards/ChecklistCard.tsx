import { IconCheck, IconCircleCheck, IconCircleDashed, IconX } from "@tabler/icons-react";
import { Card, Image, List, Mark, Text, ThemeIcon, Title, rem } from "@mantine/core";
import classes from "./ChecklistCard.module.css";

export interface CheckListCardProps {
  imageUrl: string;
  header: string;
  points: string[];
  crossFromInt: number;
}

export function ChecklistCard({
  imageUrl,
  header,
  points,
  crossFromInt,
}: CheckListCardProps) {
  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={imageUrl} alt={header} height={180} />
      </Card.Section>
      <Card.Section className={classes.section} mt="md">
       <Title size={'h4'}>{header}</Title>
      </Card.Section>
      <Card.Section className={classes.header} mt="md">
        { points.map((e,index)=>(
      <List
      spacing="md"
      pb={'5px'}
      size="md"
      center
      icon={
        <ThemeIcon color="blue" size={15} radius="xl">
          {index <=crossFromInt ? <IconCheck style={{ width: rem(15), height: rem(15) }} />: <IconX style={{ width: rem(16), height: rem(16) }} />}
        </ThemeIcon>
      }
    >
      <List.Item>{e}</List.Item>
    </List>
    ))
}
{/* { points.splice(crossForm, points.length-1).map(e=>(
      <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={15} radius="xl">
          <IconX style={{ width: rem(16), height: rem(16) }} />
        </ThemeIcon>
      }
    >
      <List.Item>{e}</List.Item>
    </List>
    ))
} */}
        {/* {points.splice(0, crossForm).map((description) => (
          <b>{description}</b>
        ))}

        {points.splice(crossForm, points.length - 1).map((description) => (
          <b>{description}</b>
        ))} */}
      </Card.Section>
    </Card>
  );
}
