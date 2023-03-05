import { ActionTree } from 'vuex';
import { RegisterState } from './state';
import { RootState } from 'src/store';
import { v4 as uuid } from 'uuid';
import { User } from 'src/types/register';

export const actions: ActionTree<RegisterState, RootState> = {
  createUser({ state, commit }, user: User): void {
    const isUserExist = state.users.find((u) => u.email === user.email);
    if (isUserExist) throw 'User with email is already registered';
    commit('SET_USERS', [...state.users, { ...user, id: uuid() }]);
  },
};
