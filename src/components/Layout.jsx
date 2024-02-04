import React from 'react';
import { Flex, useMediaQuery } from '@chakra-ui/react';

import SideNav from './SideNav/index';

/* =============================================================================
<Layout />
============================================================================= */
const Layout = ({ children }) => {
  const [isLargerThan766] = useMediaQuery('(min-width: 766px)');

  return (
    <Flex
      flex={1}
      flexDir={isLargerThan766 ? 'row' : 'column'}
      bgColor="blue.900"
      height="100%"
      pos="relative"
    >
      <SideNav isLargerThan766={isLargerThan766} />
      <Flex
        flex={1}
        px={10}
        py={6}
        borderRadius="20px"
        m="20px"
        overflow="scroll"
        pos='hidden'
        bg="#fff"
        flexFlow="column nowrap"
      >
        {children}
      </Flex>
    </Flex>
  );
};

/* Export
============================================================================= */
export default Layout;
