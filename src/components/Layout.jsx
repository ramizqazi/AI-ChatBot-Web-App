import React from 'react';
import { Outlet } from 'react-router-dom';
import { Flex, useMediaQuery } from '@chakra-ui/react';

import SideNav from './SideNav/index';

/* =============================================================================
<Layout />
============================================================================= */
const Layout = () => {
  const [isLargerThan766] = useMediaQuery('(min-width: 766px)');

  return (
    <Flex
      flex={1}
      flexDir={isLargerThan766 ? 'row' : 'column'}
      height="100%"
      pos="relative"
    >
      <SideNav isLargerThan766={isLargerThan766} />
      <Flex
        flex={1}
        px={[3, 16, 16, 16]}
        py={6}
        bg="#fff"
        overflowY="auto"
        flexFlow="column nowrap"
      >
        <Outlet />
      </Flex>
    </Flex>
  );
};

/* Export
============================================================================= */
export default Layout;
