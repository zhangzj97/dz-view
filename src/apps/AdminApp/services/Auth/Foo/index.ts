import { defineStore } from 'pinia';

export const useStore = defineStore('Auth/Foo', () => {
  const service = {};

  return {
    ...service,
  };
});
