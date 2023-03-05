import { Loan, Transaction } from './types/loan';
import { User } from './types/register';

export const roundNum = (num: number): number => {
  return +(Math.round((num + 'e+2') as unknown as number) + 'e-2');
};

export const calculateEmi = (amt: number, tenure: number): number => {
  const calcFactor = (1 + 0.006) ** tenure;
  return roundNum((amt * 0.006 * calcFactor) / (calcFactor - 1));
};

export const cacheData = (
  key: string,
  data: User[] | Loan[] | Transaction[]
): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getCache = (key: string): User[] | Loan[] | Transaction[] | [] => {
  return JSON.parse(localStorage.getItem(key) || '[]');
};
