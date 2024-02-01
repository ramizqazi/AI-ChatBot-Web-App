import React from 'react';
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import { FiMenu } from "react-icons/fi";

import SideNavList from './SideNavList';
import SideNavDrawer from './SideNavDrawer';

/* =============================================================================
<SideNav />
============================================================================= */
const SideNav = ({ isLargerThan766 }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const _handleToggleDrawer = () => {
    if (isOpen) {
      onClose()
    } else {
      onOpen()
    }
  };

  if (!isLargerThan766) {
    return (
      <Box bg='white' p={5}>
        <Button
          display="flex"
          variant="unstyled"
          onClick={onOpen}
        >
          <FiMenu size={22}/>
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
      bgColor='white'
      overflowY="hidden"
      borderRadius='6px'
      transition='width .5s'
      border="1px solid #E4E7EC"
      w={isOpen ? '250px' : '75px'}
      position={isLargerThan766 ? 'relative' : 'fixed'}
    >
      <Button
        m={"1rem"}
        display="flex"
        variant="unstyled"
        onClick={_handleToggleDrawer}
      >
        <FiMenu size={22}/>
      </Button>
      <SideNavList isOpen={isOpen} />
    </Box>
  );
};

/* Export
============================================================================= */
export default SideNav;
