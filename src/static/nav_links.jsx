import React from 'react';
import { CiChat1 } from 'react-icons/ci';
import { CiSettings } from 'react-icons/ci';

export default [
  {
    to: '/chat',
    title: 'Chat',
    InActiveIcon: <CiChat1 size={26} color="white" />,
    ActiveIcon: <CiChat1 size={26} color="white" />,
  },
  {
    to: '/settings',
    title: 'Settings',
    InActiveIcon: <CiSettings size={26} color="white" />,
    ActiveIcon: <CiSettings size={26} color="white" />,
  },
];
