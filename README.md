# react-syntax-plus README

react-syntax-plus: This is a syntax snippets plugin for React designed to simplify and accelerate the development process.

English | [简体中文](https://juejin.cn/spost/7409185886300569641)

## Features

There are two core functions of the plugin

- Quickly create basic variables based on 'useState' and 'useRef'
- Behavior derived from basic variables: useMemo, useVNet, useEffect, and useLayoutEffect`

When these methods are used, the corresponding method will be automatically introduced from the 'React' library (ignored if already introduced).

Additionally, it should be noted that the way to activate the corresponding method is to enter the corresponding keyword in the text, followed by the corresponding character recognition area.

| method            | keyword |
| ----------------- | ------- |
| `useRef`          | `uf`    |
| `useState`        | `us`    |
| `useMemo`         | `um`    |
| `useCallback`     | `uc`    |
| `useEffect`       | `ue`    |
| `useLayoutEffect` | `ul`    |

### useRef and useState

The characters after 'uf' and 'us' will be used as corresponding variable names. Note that variables after' us' will be placed in an array, and the second variable in the array will be automatically named with a camel hump.

![useState](https://github.com/mmdctjj/react-syntax-plus/blob/master/images/ustate.gif?raw=true)
### useMemo

The characters after 'um' will be used to match the base variables starting with this. After inserting the code, you need to input the variables and then press the 'tab' key to quickly jump to the custom logic after the 'return' statement.

![useMemo](https://github.com/mmdctjj/react-syntax-plus/blob/master/images/useMemo.gif?raw=true)
### useCallback

The characters after 'uc' will be used to match base or derived variables that start with this, and variables need to be input after inserting the code.

![useCallback](https://github.com/mmdctjj/react-syntax-plus/blob/master/images/useCallback.gif?raw=true)
### useEffect and useLayoutEffect

The characters after 'ue' and 'ul' will be used to match base or derived variables starting with this, and then listen for their changes,

![useEffect](https://github.com/mmdctjj/react-syntax-plus/blob/master/images/useEffect.gif?raw=true)
## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

**Enjoy!**
