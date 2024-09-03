/** useState */
export const STATEREG =
  /const\s+\[\s*(\w+)(?:,\s*(\w+))?\s*\]\s*=\s*useState\([\s\S]*?\);?/g;

/** useReducer */
export const REDUCERREG =
  /const\s+\[\s*(\w+)(?:,\s*(\w+))?\s*\]\s*=\s*useReducer\([\s\S]*?\);?/g;

/** useMemo */
export const MEMOREG = /const\s+(\w+)\s*=\s*useMemo\([\s\S]*?\);?/g;

/** useRef */
export const REFREG = /const\s+(\w+)\s*=\s*useRef\([\s\S]*?\);?/g;

/** useCallback */
export const CALLBACKREG = /const\s+(\w+)\s*=\s*useCallback\([\s\S]*?\);?/g;

/** useXxx */
export const HOOKREG =
  /const\s+(\{[^}]*\}|\[[^\]]*\]|\w+)\s*=\s*use\w*\([^)]*\)/g;
