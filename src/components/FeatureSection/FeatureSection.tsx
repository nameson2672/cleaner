import { SimpleGrid, Container, Title, Flex } from '@mantine/core';
import { IconHome2, IconHomeCog, IconHandMove, IconHomeMove, IconMenuDeep, IconAirConditioningDisabled } from '@tabler/icons-react';
import { FeatureCard } from '../Cards/FeatureCard';

const mockdata = [
  {
    icon: IconHome2,
    title: 'House Cleaning',
    description:
      'Transform your living space into a haven of cleanliness and comfort with our meticulous house cleaning services. We leave no corner untouched, ensuring a spotless and refreshing home for you to enjoy',
  },
  {
    icon: IconHomeCog,
    title: 'Renovation Clean',
    description:
      'Elevate the beauty of your newly renovated space with our specialized renovation cleaning services. We meticulously clear away the remnants of construction, leaving your transformed area pristine and ready for a fresh start.',
  },
  {
    icon: IconHandMove,
    title: 'Rental Cleaning',
    description:
      "Ensure a smooth transition for your tenants with our thorough rental cleaning services. From top to bottom, we leave no trace behind, providing a spotless and inviting space for the next chapter in your property's story",
  },
  {
    icon: IconHomeMove,
    title: 'Move Out Cleaning',
    description:
      'Make your move stress-free and leave a lasting impression with our comprehensive move-out cleaning services. We meticulously clean every nook and cranny, ensuring you hand over a spotless home and step into your new chapter with confidence.',
  },
  {
    icon: IconMenuDeep,
    title: 'Deep Cleaning',
    description:
      'Experience a new level of cleanliness with our deep cleaning services. We go beyond the surface, tackling hidden grime and dirt, leaving your space rejuvenated and refreshingly pristine.',
  },
  {
    icon: IconAirConditioningDisabled,
    title: 'Condo Cleaning',
    description:
      'Elevate condo living with our specialized cleaning services. Our meticulous attention to detail ensures a spotless and welcoming environment, allowing you to enjoy the epitome of comfort and cleanliness in your condominium.'
  },
];

export function FeaturesSection() {
  const items = mockdata.map((item) => <FeatureCard {...item} key={item.title} />);

  return (
    <Container mt={'xl'} p={'xl'} mb={30} size="lg">
      <Flex justify={"center"} align={"center"} direction={"column"}>
      <Title order={2} p={"xl"} size={"h1"}>Services We Provide</Title>
      <SimpleGrid mt={'xl'} cols={{ base: 1, sm: 3 }} spacing={50}>
        {items}
      </SimpleGrid>
      </Flex>
    </Container>
  );
}