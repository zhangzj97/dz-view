export const Service = {
  User: {
    query: { code: 'User/User.query', url: '/User/query' },
    save: { code: 'User/User.save', url: '/User/save' },
    delete: { code: 'User/User.delete', url: '/User/delete' },
  },
} as const;
