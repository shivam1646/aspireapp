import { DrawerItem } from './types/drawer';

export const emailRegex =
  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;

export const R_O_I = 0.006;

export const drawerItems: DrawerItem[] = [
  {
    text: 'Home',
    imgPath: 'src/assets/home.svg',
    mobImgPath: 'src/assets/homemobile.svg',
  },
  {
    text: 'Cards',
    imgPath: 'src/assets/card.svg',
    link: '/cards',
    mobImgPath: 'src/assets/card.svg',
  },
  {
    text: 'Payments',
    imgPath: 'src/assets/payments.svg',
    mobImgPath: 'src/assets/paymentsmobile.svg',
  },
  {
    text: 'Loans',
    imgPath: 'src/assets/credit.svg',
    link: '/loans',
    mobImgPath: 'src/assets/creditmobile.svg',
  },
];
