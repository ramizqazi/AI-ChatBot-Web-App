import React from 'react';
import {
  Drawer,
  Button,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import { FiMenu } from "react-icons/fi";

import SideNavList from './SideNavList';

/* =============================================================================
<SideNavDrawer />
============================================================================= */
const SideNavDrawer = ({ onClose, isOpen }) => (
  <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerHeader border="none" borderBottomWidth="1px">
        <Button
          display="flex"
          variant="unstyled"
          onClick={onClose}
        >
          <FiMenu size={22} />
        </Button>
      </DrawerHeader>
      <DrawerBody px={4}>
        <SideNavList isOpen={isOpen} />
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

/* Export
============================================================================= */
export default SideNavDrawer;
