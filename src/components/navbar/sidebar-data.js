import React from 'react';

import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Forms',
    path: '/',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },

  {
    title: 'Admin Login',
    path: '/LoginPage',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },

  {
    title: 'Sorgulama',
    path: '/basvuru-sorgula/{}id',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
];
