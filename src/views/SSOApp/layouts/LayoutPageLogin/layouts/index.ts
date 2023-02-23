export const layoutData = {
  option: { layout: 'col', size: 'w-screen h-screen', overflow: 'hidden' },
  children: [
    {
      option: { layout: 'one', size: 'h-grow', class: 'h-0', overflow: 'auto' },
      slot: 'default',
    },
  ],
};
