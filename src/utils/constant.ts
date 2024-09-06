/** useXxx */
export const HOOKREG =
  /const\s+(\{[^}]*\}|\[[^\]]*\]|\w+)\s*=\s*(use\w+)\s*(<[^>]*>)?\([^)]*\)/g;

/** uxprops */
export const PROPSREG = /u([celm])*props(\w*)/g;

/** function props */
export const FUNPROPSREG = /\(\{([^}]+)\}\s*(?::\s*\w+)?\s*\)(?=\s*\{)/g;

export const ARROWPROPSREG =
  /const\s+\w+\s*=\s*\(\s*\{([^}]+)\}\s*(?::\s*\w+)?\s*\)\s*=>\s*\{/g;
