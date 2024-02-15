import { Text, rem } from '@mantine/core';
import {  TablerIconsProps } from '@tabler/icons-react';
import classes from './FetureCard.module.css';

export interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<TablerIconsProps>;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description, ...others }: FeatureProps) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon style={{ width: rem(38), height: rem(38) }} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}