import React from 'react';
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return <MenuToggle toggle={toggle} isOpen={isOpen} />;
};

const MenuItem = ({ children, isLast, to = '/', ...rest }: any) => {
  const router = useRouter();

  const handleClick = (ev: any) => {
    ev.preventDefault();
    router.push(to);
  };
  return (
    <Box onClick={handleClick} cursor="pointer">
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Box>
  );
};

const MenuLinks = ({ children, isLast, to = '/', ...rest }: any) => {
  return (
    <Stack
      spacing={8}
      align="center"
      justify={['center', 'space-between', 'flex-end', 'flex-end']}
      direction={['column', 'row', 'row', 'row']}
      pt={[4, 4, 0, 0]}
    >
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/how">How It Works</MenuItem>
    </Stack>
  );
};

const MenuToggle = ({ toggle, isOpen }: any) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }: any) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['black', 'black', 'primary.700', 'primary.700']}
      {...props}
    >
      {children}
    </Flex>
  );
};

export const NavBar = (props: any) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      {/* <Logo
        w="100px"
        color={['white', 'white', 'primary.500', 'primary.500']}
      /> */}
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};
