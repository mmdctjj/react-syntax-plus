/** useXxx */
export const HOOKREG =
  /const\s+(\{[^}]*\}|\[[^\]]*\]|\w+)\s*=\s*(use\w+)\s*(<[^>]*>)?\([^)]*\)/g;

/** uxprops */
export const PROPSREG = /u([celm])*props(\w*)/g;

/** function props */
export const FUNPROPSREG =
  /(?:function\s+\w+\s*\(\s*(\w+)\s*(?::\s*\w+)?\s*\)|(?:\{([^}]+)\}\s*(?::\s*\w+)?\s*))/g;
