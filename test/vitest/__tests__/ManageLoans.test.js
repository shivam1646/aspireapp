import { installQuasar } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { Notify } from 'quasar';
import { describe, expect, it, vi } from 'vitest';
import { createStore } from 'vuex';
import ManageLoansVue from 'src/components/Loans/ManageLoans.vue';
import { getCache } from 'src/utils';

vi.mock('src/utils');

installQuasar({ plugins: { Notify } });

const mockStore = createStore({
  modules: {
    loan: {
      mutations: {
        SET_TRANSACTIONS: vi.fn(),
        SET_LOANS: vi.fn(),
      },
    },
  },
});

function getManageLoansWrapper() {
  return mount(ManageLoansVue, {
    global: {
      plugins: [mockStore],
    },
  });
}

describe('Login form', () => {
  getCache.mockReturnValue(() => []);

  it('should have email and password fields', () => {
    const wrapper = getManageLoansWrapper();
    expect(wrapper.findComponent({ name: 'loan-toolbar' }).exists).toBeTruthy();
    expect(wrapper.findComponent({ name: 'loan-list' }).exists).toBeTruthy();
    expect(wrapper.findComponent({ name: 'no-loans' }).exists).toBeTruthy();
    expect(
      wrapper.findComponent({ name: 'apply-loan-modal' }).exists
    ).toBeTruthy();
  });
});
