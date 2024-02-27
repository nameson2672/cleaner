import { useState } from 'react';
import { Container, Group, Burger, Drawer, em } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
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

  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);


  const items = links.map((link) => (
    <div onClick={(event) => {
      event.preventDefault();
      setActive(link.link);
    }}>
      <Link
        onClick={toggle}
        key={link.label + Math.random()}
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
      {isMobile &&
        <Drawer offset={2} opened={opened} onClose={toggle}>
          <MantineLogo size={28} />
          {items}
        </Drawer>
      }
    </header>
  );
}