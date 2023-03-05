import { User } from 'src/types/register';
import { MutationTree } from 'vuex';
import { RegisterState } from './state';

export const mutations: MutationTree<RegisterState> = {
  SET_USERS(state: RegisterState, users: User[]) {
    state.users = users;
  },
};
