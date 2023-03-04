export const schema = {
  table: [
    { code: 'Text', component: 'Text' },
    { code: 'TextArea', component: 'TextArea' },
    { code: 'Number', component: 'Number' },

    { code: 'Time', component: 'Time' },
    { code: 'DateTime', component: 'DateTime' },
    { code: 'DayTime', component: 'DayTime' },
    { code: 'Date', component: 'Date' },
    { code: 'Mounth', component: 'Mounth' },
    { code: 'Year', component: 'Year' },

    {
      code: 'Find',
      component: 'Find',
      service: 'Auth/AcUser/Find',
      props: { coverField: 'FindCoverField', schema: [] },
    },

    {
      code: 'EnumText',
      component: 'EnumText',
      service: 'Enum.Auth/AcUser.AppType',
    },
    {
      code: 'EnumTag',
      component: 'EnumTag',
      service: 'Auth/AcUser/Find',
    },

    { code: 'Image', component: 'Image' },
    { code: 'File', component: 'File' },

    //
  ],
};
