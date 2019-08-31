declare module 'for-editor' {
  export interface IToolbar {
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    h6?: boolean;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    img?: boolean;
    link?: boolean;
    code?: boolean;
    preview?: boolean;
    expand?: boolean;
    undo?: boolean;
    redo?: boolean;
    save?: boolean;
    subfield?: boolean;
  }

  interface IP {
    value?: string;
    lineNum?: number;
    onChange?: (value: string) => void;
    onSave?: (value: string) => void;
    placeholder?: string;
    fontSize?: string;
    disabled?: boolean;
    style?: object;
    height?: string;
    preview?: boolean;
    expand?: boolean;
    subfield?: boolean;
    toolbar?: IToolbar;
    language?: string;
    addImg?: (file: File, index: number) => void;
  }

  export default class ForEditor extends React.Component<IP, any> { }
}