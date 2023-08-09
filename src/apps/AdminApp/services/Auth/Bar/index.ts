import { defineStore } from 'pinia';

export const useStore = defineStore('Auth/Bar', () => {
  const service = {};

  return {
    ...service,
  };
});
