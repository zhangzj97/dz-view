export interface PluginControlProps {
  k: string;
  label: string;
  text: string | false;
  tooltip?: string | false;
  visible?: boolean;
  readonly?: boolean;
  required?: boolean;
  propsRow: any;
  conventionOption: any;
  customOption: any;
}

export const usePluginControl = () => {};
