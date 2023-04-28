import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'MusicPlaylist',
    icon: IconLayoutDashboard,
    href: '/',
  },
  {
    navlabel: true,
    subheader: 'Utilities',
  },
  {
    id: uniqueId(),
    title: 'ListOfTunes',
    icon: IconTypography,
    href: '/utilities/typography',
  },
  {
    id: uniqueId(),
    title: 'How  To Subscribe',
    icon: IconCopy,
    href: '/utilities/shadow',
  },
  
  {
    navlabel: true,
    subheader: 'Winnings',
  },
  {
    id: uniqueId(),
    title: 'Prizes',
    icon: IconMoodHappy,
    href: '/icons',
  },
  {
    id: uniqueId(),
    title: 'Winners',
    icon: IconAperture,
    href: '/sample-page',
  },
  
  {
    navlabel: true,
    subheader: 'Extra',
  },
  {
    id: uniqueId(),
    title: 'FAQ',
    icon: IconMoodHappy,
    href: '/utilities/faq',
  },
  
  {
    id: uniqueId(),
    title: 'How To Unsubscribe',
    icon: IconMoodHappy,
    href: '/utilities/unsubscribe',
  },
 
  
];

export default Menuitems;
