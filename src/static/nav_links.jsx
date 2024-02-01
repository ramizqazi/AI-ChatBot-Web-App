import React from 'react';

import { FaRegFaceGrinWide } from 'react-icons/fa6';
import { FaRegCheckCircle } from 'react-icons/fa';

export default [
  {
    to: '/users/add-user',
    title: 'Add Face',
    InActiveIcon: <FaRegFaceGrinWide />,
    ActiveIcon: <FaRegFaceGrinWide color='white'/>,
  },
  {
    to: '/users/face-verification',
    title: 'Face Verification',
    InActiveIcon: <FaRegCheckCircle />,
    ActiveIcon: <FaRegCheckCircle color='white' />,
  },
];
