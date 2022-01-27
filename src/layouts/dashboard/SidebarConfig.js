import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import pneumoniaIcon from '@iconify/icons-healthicons/pneumonia';
import malariaIcon from '@iconify/icons-healthicons/malaria-microscope';
import Covid19Icon from '@iconify/icons-healthicons/virus';
// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'home',
    path: '/dashboard/app',
    icon: getIcon(homeFill)
  },
  {
    title: 'Pneumonia',
    path: '/dashboard/pneumonia',
    icon: getIcon(pneumoniaIcon)
  },
  {
    title: 'Malaria',
    path: '/dashboard/malaria',
    icon: getIcon(malariaIcon)
  },
  {
    title: 'Covid19',
    path: '/dashboard/covid19',
    icon: getIcon(Covid19Icon)
  }
];

export default sidebarConfig;
