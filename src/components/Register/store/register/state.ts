import { User } from 'src/types/register';

export interface RegisterState {
  users: User[];
}

export const state: RegisterState = {
  users: [],
};
