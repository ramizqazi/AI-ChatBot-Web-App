import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Link, List, Text, ListItem } from '@chakra-ui/react';

import NAV_LINKS from '../../static/nav_links';

const SideNavList = ({ isOpen }) => {
  const location = useLocation();
  
  return (
    <List
      ml={'0.5rem'}
      mt="1.5rem"
      h={`${window.innerHeight - 150}px`}
      display="flex"
      flexDir="column"
      mr={isOpen ? '1rem' : '0.5rem'}
      justifyContent="space-between"
    >
      {NAV_LINKS.map(link => {
        const active = isActive(link.to, location);
        return (
          <ListItem key={link.to}>
            <Link
              px="28px"
              py="18px"
              as={NavLink}
              to={link.to}
              display="flex"
              position="relative"
              bgColor={active ? 'red.300' : 'none'}
              borderRadius="6px"
              alignItems="center"
              textDecor="none !important"
            >
              {active ? link.ActiveIcon : link.InActiveIcon}
              {isOpen && (
                <Text
                  ml="38px"
                  position="absolute"
                  color={'#fff'}
                  whiteSpace="nowrap"
                >
                  {link.title}
                </Text>
              )}
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};

const isActive = (link, location) => location.pathname.startsWith(link);

export default SideNavList;
