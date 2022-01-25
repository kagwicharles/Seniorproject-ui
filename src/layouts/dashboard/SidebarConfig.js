import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'home',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Pneumonia',
    path: '/dashboard/pneumonia',
    icon: getIcon(peopleFill)
  },
  {
    title: 'Malaria',
    path: '/dashboard/malaria',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Covid19',
    path: '/dashboard/covid19',
    icon: getIcon(fileTextFill)
  }
];

export default sidebarConfig;
