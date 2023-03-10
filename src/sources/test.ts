const fileMap = import.meta.glob(['@/views/*/sources/*/index.ts'], {
  eager: true,
});

export default Object.entries(fileMap).reduce(
  (prev, [, item]) => Object.assign(prev, item),
  {}
);

console.log(
  fileMap,
  Object.entries(fileMap).reduce(
    (prev, [, item]) => Object.assign(prev, item),
    {}
  )
);
