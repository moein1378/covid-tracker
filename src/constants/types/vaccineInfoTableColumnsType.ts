/* eslint-disable  @typescript-eslint/no-explicit-any */
interface vaccineInfoTableColumnsType {
  name: string;
  align?: string;
  label: string;
  field: string;
  sortable?: boolean;
  format?: (val: any) => any;
}
export default vaccineInfoTableColumnsType;
