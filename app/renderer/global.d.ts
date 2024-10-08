/**
 * @author: Kk86
 * @description: 定义文件类型 
 */

declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.svg' {
  const content: any;
  export = content;
}

declare module '*.png' {
  const content: any;
  export = content;
}

declare module '*.jpg' {
  const content: any;
  export = content;
}

declare module '*.jpeg' {
  const content: any;
  export = content;
}

declare module '*.gif' {
  const content: any;
  export = content;
}
