import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'Core.User',
  state: () => ({
    userinfo: {},
    userId: '',
    token: '',
  }),
  getters: {
    getToken: state => state.token,
    getUserId: state => state.userId,
    getUserinfo: state => state.userinfo,
  },
  actions: {
    clearToken() {
      this.token = '';
    },
  },
});
