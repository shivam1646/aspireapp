import { DrawerItem } from './types/drawer';

export const emailRegex =
  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;

export const R_O_I = 0.006;

export const drawerItems: DrawerItem[] = [
  {
    text: 'Home',
    imgPath: '~assets/home.svg',
    mobImgPath: '~assets/homemobile.svg',
  },
  {
    text: 'Cards',
    imgPath: '~assets/card.svg',
    link: '/cards',
    mobImgPath: '~assets/card.svg',
  },
  {
    text: 'Payments',
    imgPath: '~assets/payments.svg',
    mobImgPath: '~assets/paymentsmobile.svg',
  },
  {
    text: 'Loans',
    imgPath: '~assets/credit.svg',
    link: '/loans',
    mobImgPath: '~assets/creditmobile.svg',
  },
];
