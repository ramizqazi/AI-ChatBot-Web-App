import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import {
  Link,
  List,
  Text,
  ListItem,
} from '@chakra-ui/react';

import NAV_LINKS from '../../static/nav_links';

const SideNavList = ({ isOpen }) => {
  const location = useLocation();

  return (
    <List ml={isOpen ? '1rem' : '0.5rem'} mr={isOpen ? "1rem" : '0.5rem'} mt="1.5rem">
      {NAV_LINKS.map((link) => {
        const active = isActive(link.to, location);
        return (
          <ListItem key={link.to}>
            <Link
              mb='17px'
              px="16px"
              py="18px"
              as={NavLink}
              to={link.to}
              display="flex"
              justifyContent={!isOpen && 'center'}
              position="relative"
              bgColor={active ? "green.500" : 'none'}
              borderRadius='6px'
              alignItems="center"
              textDecor="none !important"
            >
              {active ? link.ActiveIcon : link.InActiveIcon}
              {isOpen && (
                <Text ml="18px" color={active ? "#fff" : '#000'} whiteSpace='nowrap'>{link.title}</Text>
              )}
            </Link>
          </ListItem>
        )
      })}
    </List>
  );
};

const isActive = (link, location) => location.pathname.startsWith(link);

export default SideNavList;
