import { defineStore } from 'pinia';

export const useStore = defineStore('User/User', () => {
  const service = {};

  return {
    ...service,
  };
});
