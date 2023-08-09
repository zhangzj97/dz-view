export const Service = {
  Auth: {
    Bar: {
      count: { code: 'Auth/Bar.count', url: '/Bar/count' },
      create: { code: 'Auth/Bar.create', url: '/Bar/create' },
      createSimple: { code: 'Auth/Bar.createSimple', url: '/Bar/createSimple' },
      delete: { code: 'Auth/Bar.delete', url: '/Bar/delete' },
      deleteHard: { code: 'Auth/Bar.deleteHard', url: '/Bar/deleteHard' },
      find: { code: 'Auth/Bar.find', url: '/Bar/find' },
      restore: { code: 'Auth/Bar.restore', url: '/Bar/restore' },
      select: { code: 'Auth/Bar.select', url: '/Bar/select' },
      update: { code: 'Auth/Bar.update', url: '/Bar/update' },

      updateSimple: { code: 'Auth/Bar.updateSimple', url: '/Bar/updateSimple' },
    },

    Foo: {
      count: { code: 'Auth/Foo.count', url: '/Foo/count' },
      create: { code: 'Auth/Foo.create', url: '/Foo/create' },
      createSimple: { code: 'Auth/Foo.createSimple', url: '/Foo/createSimple' },
      delete: { code: 'Auth/Foo.delete', url: '/Foo/delete' },
      deleteHard: { code: 'Auth/Foo.deleteHard', url: '/Foo/deleteHard' },
      find: { code: 'Auth/Foo.find', url: '/Foo/find' },
      restore: { code: 'Auth/Foo.restore', url: '/Foo/restore' },
      select: { code: 'Auth/Foo.select', url: '/Foo/select' },
      update: { code: 'Auth/Foo.update', url: '/Foo/update' },

      updateSimple: { code: 'Auth/Foo.updateSimple', url: '/Foo/updateSimple' },
    },
  },
} as const;
