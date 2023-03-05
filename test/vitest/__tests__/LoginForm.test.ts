import { installQuasar } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { Notify } from 'quasar';
import LoginFormVue from 'src/components/LoginForm.vue';
import { describe, expect, it, vi } from 'vitest';
import { createStore } from 'vuex';

installQuasar({ plugins: { Notify } });

const actions = {
  login: vi.fn(),
};
const mockStore = createStore({
  actions,
});

function getLoginFormWrapper() {
  return mount(LoginFormVue, {
    global: {
      plugins: [mockStore],
    },
  });
}

describe('Login form', () => {
  it('should have email and password fields', () => {
    const wrapper = getLoginFormWrapper();
    expect(wrapper.findAllComponents({ name: 'q-input' }).length).toBe(2);
  });

  it('should have link to register', () => {
    const wrapper = getLoginFormWrapper();
    expect(wrapper.find('.login-form__register-link').text()).toBe('Register');
  });

  it('should not call login method if email or pin are not entered', async () => {
    const wrapper = getLoginFormWrapper();
    await wrapper.findComponent({ name: 'q-form' }).trigger('submit');
    expect(actions.login).not.toBeCalled();
  });

  it('should call login method if email and pin are entered', async () => {
    const wrapper = getLoginFormWrapper();
    const [email, pin] = wrapper.findAllComponents({ name: 'q-input' });
    email.setValue('abc@x');
    pin.setValue('123456');
    await wrapper.findComponent({ name: 'q-form' }).trigger('submit');
    expect(actions.login).toHaveBeenCalledTimes(1);
  });
});
