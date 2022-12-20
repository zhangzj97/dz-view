import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'Core.Auth',
  state: () => ({
    token: '',
  }),
  getters: {
    getToken: state => state.token,
  },
  actions: {
    clearToken() {
      this.token = '';
    },
  },
});
