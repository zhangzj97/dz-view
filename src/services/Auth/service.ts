export const Service = {
  Auth: {
    Bar: {
      count: { code: 'Auth/Bar.count', url: '/Bar/count' },
      create: { code: 'Auth/Bar.create', url: '/Bar/create' },
      deleteSoft: { code: 'Auth/Bar.deleteSoft', url: '/Bar/deleteSoft' },
      deleteHard: { code: 'Auth/Bar.deleteHard', url: '/Bar/deleteHard' },
      find: { code: 'Auth/Bar.find', url: '/Bar/find' },
      restore: { code: 'Auth/Bar.restore', url: '/Bar/restore' },
      select: { code: 'Auth/Bar.select', url: '/Bar/select' },
      update: { code: 'Auth/Bar.update', url: '/Bar/update' },
    },

    BarSingle: {
      count: { code: 'Auth/BarSingle.count', url: '/BarSingle/count' },
      create: { code: 'Auth/BarSingle.create', url: '/BarSingle/create' },
      deleteSoft: { code: 'Auth/BarSingle.deleteSoft', url: '/BarSingle/deleteSoft' },
      deleteHard: { code: 'Auth/BarSingle.deleteHard', url: '/BarSingle/deleteHard' },
      find: { code: 'Auth/BarSingle.find', url: '/BarSingle/find' },
      restore: { code: 'Auth/BarSingle.restore', url: '/BarSingle/restore' },
      select: { code: 'Auth/BarSingle.select', url: '/BarSingle/select' },
      update: { code: 'Auth/BarSingle.update', url: '/BarSingle/update' },
    },

    Foo: {
      count: { code: 'Auth/Foo.count', url: '/Foo/count' },
      create: { code: 'Auth/Foo.create', url: '/Foo/create' },
      deleteSoft: { code: 'Auth/Foo.deleteSoft', url: '/Foo/deleteSoft' },
      deleteHard: { code: 'Auth/Foo.deleteHard', url: '/Foo/deleteHard' },
      find: { code: 'Auth/Foo.find', url: '/Foo/find' },
      restore: { code: 'Auth/Foo.restore', url: '/Foo/restore' },
      select: { code: 'Auth/Foo.select', url: '/Foo/select' },
      update: { code: 'Auth/Foo.update', url: '/Foo/update' },
    },
  },
  User: {
    query: { code: 'User/User.query', url: '/User/query' },
    save: { code: 'User/User.save', url: '/User/save' },
    delete: { code: 'User/User.delete', url: '/User/delete' },
  },
} as const;
