import React from 'react';
import {
  Link,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  Text,
  Img,
} from '@chakra-ui/react';
import { Link as NavLink } from 'react-router-dom';

import SideNavList from './SideNavList';
import LogoImg from '../../assets/images/logo.png';

/* =============================================================================
<SideNavDrawer />
============================================================================= */
const SideNavDrawer = ({ onClose, isOpen }) => (
  <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay />
    <DrawerContent bg="blue.800">
      <DrawerHeader border="none" borderBottomWidth="1px">
      <Link
        px="20px"
        py="18px"
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
      </DrawerHeader>
      <DrawerBody px={4} mt='-20px'>
        <SideNavList isOpen={isOpen} />
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

/* Export
============================================================================= */
export default SideNavDrawer;
