import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Navbar.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

const links = [
  { link: '/', label: 'Home' },
  { link: '/services', label: 'Services' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/contactUs', label: 'Contact Us' },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0]?.link);
  const router = useRouter();

  const items = links.map((link) => (
    <div onClick={(event) => {
      event.preventDefault();
      setActive(link.link);
    }}>
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
    >
      {link.label}

    </Link>
    </div>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <MantineLogo size={28} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}