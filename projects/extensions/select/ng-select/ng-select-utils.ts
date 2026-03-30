const unescapedHTMLExp = /[&<>"']/g;
const hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
const htmlEscapes: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

export function escapeHTML(value: string) {
  return value && hasUnescapedHTMLExp.test(value)
    ? value.replace(unescapedHTMLExp, chr => htmlEscapes[chr])
    : value;
}

export function isDefined(value: any) {
  return value != null;
}

export function isObject(value: any) {
  return typeof value === 'object' && isDefined(value);
}

export function isPromise(value: any) {
  return value instanceof Promise;
}

export function isFunction(value: any) {
  return value instanceof Function;
}

export function newId() {
  // First character is an 'a', it's good practice to tag id to begin with a letter
  return 'axxxxxxxxxxx'.replace(/[x]/g, () => {
    const val = (Math.random() * 16) | 0;
    return val.toString(16);
  });
}

export enum KeyCode {
  Tab = 'Tab',
  Enter = 'Enter',
  Esc = 'Escape',
  Space = ' ',
  ArrowUp = 'ArrowUp',
  ArrowDown = 'ArrowDown',
  Backspace = 'Backspace',
}
