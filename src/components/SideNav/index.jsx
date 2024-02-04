import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link as NavLink } from 'react-router-dom';
import { Box, Button, Link, Img, Text, useDisclosure } from '@chakra-ui/react';

import SideNavList from './SideNavList';
import SideNavDrawer from './SideNavDrawer';
import LogoImg from '../../assets/images/logo.png';

/* =============================================================================
<SideNav />
============================================================================= */
const SideNav = ({ isLargerThan766 }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!isLargerThan766) {
    return (
      <Box px={5} pt={5}>
        <Button display="flex" variant="unstyled" onClick={onOpen}>
          <FiMenu size={22} color="white" />
          <SideNavDrawer onClose={onClose} isOpen={isOpen} />
        </Button>
      </Box>
    );
  }

  return (
    <Box
      top={0}
      left={0}
      bottom={0}
      zIndex={10}
      overflow="hidden"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      borderWidth={0}
      transition="width .5s"
      w={isOpen ? '250px' : '100px'}
      position={isLargerThan766 ? 'relative' : 'fixed'}
    >
      <Link
        px="20px"
        py="18px"
        mt="1.5rem"
        as={NavLink}
        ml={'0.5rem'}
        display="flex"
        alignItems="center"
        to='/chat'
      >
        <Img src={LogoImg} w="45px" h="45px" />
        {isOpen && (
          <Text
            ml="55px"
            fontSize="28px"
            fontWeight="semibold"
            position="absolute"
            color={'#fff'}
            whiteSpace="nowrap"
          >
            Chat Bot
          </Text>
        )}
      </Link>
      <SideNavList isOpen={isOpen} />
    </Box>
  );
};

/* Export
============================================================================= */
export default SideNav;
