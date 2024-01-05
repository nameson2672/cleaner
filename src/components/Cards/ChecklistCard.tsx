import { IconCheck, IconX } from "@tabler/icons-react";
import { Card, Image, Badge, List, ThemeIcon, rem } from "@mantine/core";
import classes from "./ChecklistCard.module.css";

const mockdata = {
  image:
    "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
  title: "Verudela Beach",
  country: "Croatia",
  description:
    "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  badges: [
    { emoji: "☀️", label: "Sunny weather" },
    { emoji: "🦓", label: "Onsite zoo" },
    { emoji: "🌊", label: "Sea" },
    { emoji: "🌲", label: "Nature" },
    { emoji: "🤽", label: "Water sports" },
  ],
};

export interface CheckListCardProps {
  imageUrl: string;
  header: string;
  points: string[];
  crossForm: number;
}


export function ChecklistCard({
  imageUrl,
  header,
  points,
  crossForm,
}: CheckListCardProps) {
  const { image, title, description, country, badges } = mockdata;
  const features = badges.map((badge) => (
    <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
      {badge.label}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={imageUrl} alt={header} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <List
          mt={30}
          spacing="sm"
          size="sm"
          icon={
            <ThemeIcon size={20} radius="xl">
              <IconCheck
                style={{ width: rem(12), height: rem(12) }}
                stroke={3}
              />
            </ThemeIcon>
          }
        >
          {points.splice(0,crossForm).map((description) => (
            <List.Item>
              <b>{description}</b>
            </List.Item>
          ))}
        </List>
        <List
          mt={12}
          spacing="sm"
          size="sm"
          icon={
            <ThemeIcon size={20} radius="xl">
              <IconX style={{ width: rem(12), height: rem(12) }} stroke={3} />
            </ThemeIcon>
          }
        >
          {points.splice(crossForm, points.length-1).map((description) => (
            <List.Item>
              <b>{description}</b>
            </List.Item>
          ))}
        </List>
      </Card.Section>
    </Card>
  );
}
