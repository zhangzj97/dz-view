type SchemaFormCompoent = 'Text';

type SchemaFormPosition = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

interface SchemaForm {
  field: string;

  // [I18n] label 与 翻译
  alias?: string | boolean;
  // [I18n]
  title?: string | boolean;

  // [Slot] formItem
  component: string | SchemaFormCompoent | Function;
  labelComponent: string | Function;

  // [FormItemOption] the content like:  placeholder and message
  content: string | Function;

  // [Tooltip]
  tooltip?: string;

  // [Style]
  readonly?: boolean;
  // [Validator]
  required?: boolean;
  // [Style & Validator]
  visible?: boolean;

  // [Style]
  layout?: 'col' | 'row';

  // [Layout]
  size?: string;
  // [Layout]
  position?: string | number | SchemaFormPosition;

  labelOption?: any;
  props?: any;

  formItemOption?: any;
  cellOption?: any;
}

// Form For Display Component
export const schemaForm = [
  // { field: 'id', title: 'Idx', comopnent: 'Input', tooltip: 'id tooltip', placeholder: 'please holder', component: 'Input' },
  // { field: 'name', title: '名称', comopnent: 'Input', component: 'Input' },
  // { field: 'Text01' },
  // { field: 'Text02', title: 'Text02' },
  // { field: 'Text03', title: 'Text03', required: true },
  // { field: 'Text04', title: 'Text04', tooltip: '这是 Text04 的 tooltip' },
  // { field: 'Text05', title: 'Text05', content: '这是 Text04 的 content' },
];
