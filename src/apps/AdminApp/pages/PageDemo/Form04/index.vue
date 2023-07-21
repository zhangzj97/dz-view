<script setup lang="ts">
import { Alert } from '@arco-design/web-vue';
import data from './sql.json';

const { isArrayExist, isNull } = useValidate();

const { bind, getValue, setState, setValue, validate, getState, pluginDom } = useForm({}, { pluginSet: 'PluginRaw', state: { test: false, required: false } }); // prettier-ignore

const store = reactive({
  // prettier-ignore
  typeList: [
    { value: 'LONG'      , title: 'LONG'      , data: { icon: 'mdi:identifier' } },
    { value: 'CHAR8'     , title: 'CHAR8'     , data: { icon: 'mdi:label' } },
    { value: 'VARCHAR256', title: 'VARCHAR256', data: { icon: 'mdi:script-text' } },
    { value: 'DATETIME'  , title: 'DATETIME'  , data: { icon: 'mdi:clock' } },
  ],

  // prettier-ignore
  tableList : [
    { tableName: 'auth_user'                        , tableComment:'[User]Data'               , type: 'Data' },
    { tableName: 'auth_user_profile'                , tableComment:'[User]ProfileVObj'        , type: 'VObj' },
    { tableName: 'auth_user_security'               , tableComment:'[User]SecurityVObj'       , type: 'VObj' },
    { tableName: 'auth_user_security_type_username'           , tableComment:'[User]SecurityVObj type=username'       , type: 'VObj' },
    { tableName: 'auth_user_security_type_mobile'           , tableComment:'[User]SecurityVObj type=mobile'       , type: 'VObj' },
    { tableName: 'auth_user_security_log'           , tableComment:'[User]SecurityLog'        , type: 'Log'  },
    { tableName: 'auth_tenant'                      , tableComment:'[Tenant]Data'             , type: 'Data' },
    { tableName: 'auth_tenant_profile'              , tableComment:'[Tenant]ProfileVObj'      , type: 'VObj' },
    { tableName: 'auth_dept'                        , tableComment:'[Dept]Data'               , type: 'Tree' },
    { tableName: 'auth_dept_profile'                , tableComment:'[Dept]ProfileVObj'        , type: 'VObj' },
    { tableName: 'auth_post'                        , tableComment:'[Post]Data'               , type: 'Data' },
    { tableName: 'auth_post_profile'                , tableComment:'[Post]ProfileVObj'        , type: 'VObj' },
    { tableName: 'auth_role'                        , tableComment:'[Role]Data'               , type: 'Data' },
    { tableName: 'auth_role_profile'                , tableComment:'[Role]ProfileVObj'        , type: 'VObj' },
    { tableName: 'auth_resourece'                   , tableComment:'[Resource]Data'           , type: 'Tree' },
    { tableName: 'auth_resourece_type_menu'               , tableComment:'[Resource]Data type=menu'           , type: 'Tree' },
    { tableName: 'auth_resourece_profile'            , tableComment:'[Resource]ProfileVObj'    , type: 'Link' },
    { tableName: 'auth_link_post_user'               , tableComment:'[Link][Post][User]'       , type: 'Link' },
    { tableName: 'auth_link_resourece_role'          , tableComment:'[Link][Resource][Role]'   , type: 'Link' },
    { tableName: 'auth_link_role_user'               , tableComment:'[Link][Role][User]'       , type: 'Link' },
    { tableName: 'auth_link_role_dept'               , tableComment:'[Link][Role][Dept]'       , type: 'Link' },
    { tableName: 'auth_link_post_user_log'           , tableComment:'[Link][Post][User]Log'    , type: 'Log'  },
    { tableName: 'auth_link_resourece_role_log'      , tableComment:'[Link][Resource][Role]Log', type: 'Log'  },
    { tableName: 'auth_link_role_user_log'           , tableComment:'[Link][Role][User]Log'    , type: 'Log'  },
    { tableName: 'auth_link_role_dept_log'           , tableComment:'[Link][Role][Dept]Log'    , type: 'Log'  },
  ],

  data,
});

// prettier-ignore
const FieldTypeSql = {
  LONG       : 'BIGINT UNSIGNED  NOT NULL DEFAULT 0',
  ENUM       : 'TINYINT UNSIGNED NOT NULL DEFAULT 0',
  CHAR8      : 'CHAR(7)          NOT NULL DEFAULT ""',
  CHAR16     : 'CHAR(15)         NOT NULL DEFAULT ""',
  CHAR32     : 'CHAR(31)         NOT NULL DEFAULT ""',
  CHAR64     : 'CHAR(63)         NOT NULL DEFAULT ""',
  CHAR128    : 'CHAR(127)        NOT NULL DEFAULT ""',
  CHAR1256   : 'CHAR(255)        NOT NULL DEFAULT ""',
  VARCHAR256 : 'VARCHAR(255)     NOT NULL DEFAULT ""',
  TEXT       : 'VARCHAR(8191)    NOT NULL DEFAULT ""',
  DATETIME   : 'DATETIME         NOT NULL            ',
};

const resetTable = async ({ tableName, tableComment, type }) => {
  await setValue('TableName')(tableName);
  await setValue('TableComment')(tableComment);

  await validate('TableName')({ error: true });
  await validate('TableComment')({ error: true });

  const [Data, Tree, VObj, Link, Log] = [
    type === 'Data',
    type === 'Tree',
    type === 'VObj',
    type === 'Link',
    type === 'Log',
  ];

  // prettier-ignore
  if (Data || Tree || VObj || Link || Log) {
    setValue('id'    )({ field:'id'            , type:'LONG'      , comment: '[Default]Id'           });
    setValue('remark')({ field:'remark'        , type:'VARCHAR256', comment: '[Default]备注'          });
  } else {
    setValue('id'    )(null);
    setValue('remark')(null);
  }

  // prettier-ignore
  if (Data || Tree || VObj || Link || Log) {
    setValue('create_user_id' )({ field:'create_user_id', type:'LONG'      , comment: '[Create]创建者 UserId'  });
    setValue('create_time'    )({ field:'create_time'   , type:'DATETIME'  , comment: '[Create]新建时间'      });
  } else {
    setValue('create_user_id')(null);
    setValue('create_time'   )(null);
  }

  // prettier-ignore
  if (Data || Tree || VObj) {
    setValue('update_user_id' )({ field:'update_user_id', type:'LONG'      , comment: '[Update]更新者 UserId'  });
    setValue('update_version' )({ field:'update_version', type:'CHAR8'     , comment: '[Update]乐观锁'        });
    setValue('update_time'    )({ field:'update_time'   , type:'DATETIME'  , comment: '[Update]更新时间'      });
  } else {
    setValue('update_user_id')(null);
    setValue('update_time'   )(null);
    setValue('update_version')(null);
  }

  // prettier-ignore
  if(Data || Tree) {
    setValue('delete_user_id')({ field:'delete_user_id', type:'LONG'      , comment: '[Delete]删除者 UserId'  });
    setValue('delete_time'   )({ field:'delete_time'   , type:'DATETIME'  , comment: '[Delete]删除时间'      });
    setValue('delete_flag'   )({ field:'delete_flag'   , type:'CHAR8'     , comment: '[Delete]删除标记'      });
  } else {
    setValue('delete_user_id' )(null);
    setValue('delete_time'    )(null);
    setValue('delete_flag'    )(null);
  }

  // prettier-ignore
  if(Tree) {
    setValue('tree_pid'     )({ field:'tree_pid',     type:'LONG'      , comment:'[Tree]上级 Id'  });
    setValue('tree_level'   )({ field:'tree_level',   type:'CHAR8'     , comment:'[Tree]层级'  });
    setValue('tree_ancestor')({ field:'tree_ancestor',type:'VARCHAR256', comment:'[Tree]祖先 IdPath'  });
  } else {
    setValue('tree_pid'       )(null);
    setValue('tree_level'     )(null);
    setValue('tree_ancestor'  )(null);
  }

  getValue('01') && setValue('01')(null);
  getValue('02') && setValue('02')(null);
  getValue('03') && setValue('03')(null);
  getValue('04') && setValue('04')(null);
  getValue('05') && setValue('05')(null);
  getValue('06') && setValue('06')(null);
  getValue('07') && setValue('07')(null);
  getValue('08') && setValue('08')(null);
  getValue('09') && setValue('09')(null);
  getValue('10') && setValue('10')(null);
  getValue('11') && setValue('11')(null);
  getValue('12') && setValue('12')(null);
  getValue('13') && setValue('13')(null);
  getValue('14') && setValue('14')(null);
  getValue('15') && setValue('15')(null);
  getValue('16') && setValue('16')(null);
  getValue('17') && setValue('17')(null);
  getValue('18') && setValue('18')(null);
  getValue('19') && setValue('19')(null);
  getValue('20') && setValue('20')(null);

  const tableFieldList = data[tableName]?.fieldList;
  if (isArrayExist(tableFieldList)) {
    let index = 0;

    // prettier-ignore
    const indexList = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
    tableFieldList.reduce((_, { field, type, comment }) => {
      // prettier-ignore
      if ([
        'id', 'remark',
        'create_user_id', 'create_time',
        'update_user_id', 'update_time', 'update_version',
        'delete_user_id', 'delete_time', 'delete_flag',
        'tree_pid',  'tree_level', 'tree_ancestor',
      ].includes(field)) {
        setValue(field)({ field, type, comment });
        return
      }

      setValue(indexList[index])({ field, type, comment });
      index += 1;
    });
  }
};

// prettier-ignore
const sql = async () => {
  let sql = [];
  let jsonSqlField = [];

  //   DROP TABLE IF EXISTS auth_user;
  // CREATE TABLE IF NOT EXISTS auth_user (
  //   id             undefined COMMENT 'Id',
  //   avatar         VARCHAR(255)     NOT NULL DEFAULT "" COMMENT 'Avatar',
  //   PRIMARY KEY (`id`)
  // ) COMMENT '[User]Data';

  const { error: error1 } = await validate('TableName')({ error: true });
  if (error1) return;
  const { error: error2 } = await validate('TableComment')({ error: true });
  if (error2) return;

  const tableName = getValue('TableName');
  const tableComment = getValue('TableComment');

  const format = ({ field, comment, type }) => {
    if (!field) return '';
    return `  ${field.trim().padEnd(32, ' ')} ${FieldTypeSql[type].padEnd(
      64,
      ' '
    )} COMMENT '${comment.trim()}'`;
  };

  sql.push(`DROP TABLE IF EXISTS ${tableName}`);
  sql.push(`CREATE TABLE IF NOT EXISTS ${tableComment} (`);

  // prettier-ignore
  {
    getValue('id'            ) && sql.push(format(getValue('id'             ))) && jsonSqlField.push(getValue('id'             ));
    getValue('remark'        ) && sql.push(format(getValue('remark'         ))) && jsonSqlField.push(getValue('remark'         ));
    getValue('create_user_id') && sql.push(format(getValue('create_user_id' ))) && jsonSqlField.push(getValue('create_user_id' ));
    getValue('create_time'   ) && sql.push(format(getValue('create_time'    ))) && jsonSqlField.push(getValue('create_time'    ));
    getValue('update_user_id') && sql.push(format(getValue('update_user_id' ))) && jsonSqlField.push(getValue('update_user_id' ));
    getValue('update_time'   ) && sql.push(format(getValue('update_time'    ))) && jsonSqlField.push(getValue('update_time'    ));
    getValue('update_version') && sql.push(format(getValue('update_version' ))) && jsonSqlField.push(getValue('update_version' ));
    getValue('delete_user_id') && sql.push(format(getValue('delete_user_id' ))) && jsonSqlField.push(getValue('delete_user_id' ));
    getValue('delete_time'   ) && sql.push(format(getValue('delete_time'    ))) && jsonSqlField.push(getValue('delete_time'    ));
    getValue('delete_flag'   ) && sql.push(format(getValue('delete_flag'    ))) && jsonSqlField.push(getValue('delete_flag'    ));
    getValue('tree_pid'      ) && sql.push(format(getValue('tree_pid'       ))) && jsonSqlField.push(getValue('tree_pid'       ));
    getValue('tree_level'    ) && sql.push(format(getValue('tree_level'     ))) && jsonSqlField.push(getValue('tree_level'     ));
    getValue('tree_ancestor' ) && sql.push(format(getValue('tree_ancestor'  ))) && jsonSqlField.push(getValue('tree_ancestor'  ));
  }

  // prettier-ignore
  {
    getValue('01') && sql.push(format(getValue('01'))) && jsonSqlField.push(getValue('01'))
    getValue('02') && sql.push(format(getValue('02'))) && jsonSqlField.push(getValue('02'))
    getValue('03') && sql.push(format(getValue('03'))) && jsonSqlField.push(getValue('03'))
    getValue('04') && sql.push(format(getValue('04'))) && jsonSqlField.push(getValue('04'))
    getValue('05') && sql.push(format(getValue('05'))) && jsonSqlField.push(getValue('05'))
    getValue('06') && sql.push(format(getValue('06'))) && jsonSqlField.push(getValue('06'))
    getValue('07') && sql.push(format(getValue('07'))) && jsonSqlField.push(getValue('07'))
    getValue('08') && sql.push(format(getValue('08'))) && jsonSqlField.push(getValue('08'))
    getValue('09') && sql.push(format(getValue('09'))) && jsonSqlField.push(getValue('09'))
    getValue('10') && sql.push(format(getValue('10'))) && jsonSqlField.push(getValue('10'))
    getValue('11') && sql.push(format(getValue('11'))) && jsonSqlField.push(getValue('11'))
    getValue('12') && sql.push(format(getValue('12'))) && jsonSqlField.push(getValue('12'))
    getValue('13') && sql.push(format(getValue('13'))) && jsonSqlField.push(getValue('13'))
    getValue('14') && sql.push(format(getValue('14'))) && jsonSqlField.push(getValue('14'))
    getValue('15') && sql.push(format(getValue('15'))) && jsonSqlField.push(getValue('15'))
    getValue('16') && sql.push(format(getValue('16'))) && jsonSqlField.push(getValue('16'))
    getValue('17') && sql.push(format(getValue('17'))) && jsonSqlField.push(getValue('17'))
    getValue('18') && sql.push(format(getValue('18'))) && jsonSqlField.push(getValue('18'))
    getValue('19') && sql.push(format(getValue('19'))) && jsonSqlField.push(getValue('19'))
    getValue('20') && sql.push(format(getValue('20'))) && jsonSqlField.push(getValue('20'))
  }

  sql.push(`PRIMARY KEY (id)`);
  sql.push(`) COMMENT '${tableComment}';`);

  setValue('SQL')(sql.join('\n'));

  store.data[tableName] = {
    tableName,
    tableComment,
    fieldList: jsonSqlField
  }
  setValue('JSON')(JSON.stringify(store.data));

};
</script>

<template>
  <v s="w-grow h-grow" w="gap-1" col>
    <v s="w-grow h-fit" w="gap-1" grid>
      <template v-for="(item, index) of store.tableList" :key="index">
        <dz-btn :title="item.tableName" @click="resetTable(item)" />
      </template>
    </v>

    <v s="w-grow h-fit">
      <dz-btn title="sql" @click="sql" />
    </v>
    <dz-card s="w-grow h-grow" class="card-lg" grid title="Form">
      <v s="w-grow h-grow">
        <!-- prettier-ignore -->
        <v s="w-1/3 h-grow" w="overflow-auto" grid> 
          <dz-form-item s="w-full h-fit" v-bind="bind('TableName')('Input')({ required: true }, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('TableComment')('Input')({ required: true }, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('id'             )('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('remark'         )('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('create_time'    )('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('create_user_id' )('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('update_time'    )('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('update_version' )('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('update_user_id' )('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('delete_flag'    )('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('delete_user_id' )('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('delete_time'    )('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('tree_pid'       )('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('tree_ancestor'  )('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('tree_level'     )('SqlField')({}, {service: {list: store.typeList}})" />         

        </v>
        <!-- prettier-ignore -->
        <v s="w-grow h-grow" w="overflow-auto" grid>
          <dz-form-item s="w-full h-fit" v-bind="bind('JSON')('Textarea')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('SQL')('Textarea')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('01')('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('02')('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('03')('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('04')('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('05')('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('07')('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('08')('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('09')('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('10')('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('11')('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('12')('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('13')('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('14')('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('15')('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('16')('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('17')('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('18')('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('19')('SqlField')({}, {service: {list: store.typeList}})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('20')('SqlField')({}, {service: {list: store.typeList}})" />
        </v>
      </v>
    </dz-card>
  </v>
</template>
