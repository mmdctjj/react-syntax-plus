# Change Log

## [0.0.5] - 2025-06-11

### 🚀 更新说明

#### 💄 更新内容

本次更新主要修改了触发时机，现在完全由 `vscode` `registerCompletionItemProvider` 函数的触发机制决定。

#### 🎯 后续计划

现在的触发时机：如果是完整的单词，一般 `vscode` 会自动触发，如果不是完整的单词，需要在后面输入任何一位数字，才会触发， `registerCompletionItemProvider` 在近些迭代中，慢慢地变得超出预期了，且其第三个参数 `triggerCharacters ` 不起作用了

我尝试过，将这个参数设置为 a ~ z ， A ~ Z，依然不会触发，所以，现在直接去掉了第三个参数，完全由 `vscode` 自动触发

接下来主要尝试 使用自定义的 `Language Server` 接管 `vscode` 自动触发机制，从而达到完美效果

## [0.0.3] - 2024-09-06

### feat: 🚀 add props

## [0.0.2] - 2024-09-03

### feat: 🚀 add custom hook

### fix: 🚗 low version support

## [0.0.1] - 2024-08-27

### feat: 🚀 add useRef, useState

### feat: 🚀 add useEffect, useLayoutEffect, useMemo, useCallback

## [Unreleased]
