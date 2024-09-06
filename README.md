# react-syntax-plus README

react-syntax-plus: This is a syntax snippets plugin for React designed to simplify and accelerate the development process.

English | [简体中文](https://juejin.cn/spost/7409185886300569641)

## Features

There are two core functions of the plugin

- Quickly create basic variables based on 'useState' and 'useRef'
- Behavior derived from basic variables: useMemo, useVNet, useEffect, and useLayoutEffect`
- Custom hooks starting with 'use'

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

### props

Use keywords with props to wake up, for example: `ueprops`, which will prompt a code prompt based on useEffect with props,

If a string is appended after `ueprops`, it will be considered a property of props, for example:

![props](https://private-user-images.githubusercontent.com/49404397/364216070-357f31f6-9d77-4480-a8ab-eca5769fc2dc.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU2MDM5MjEsIm5iZiI6MTcyNTYwMzYyMSwicGF0aCI6Ii80OTQwNDM5Ny8zNjQyMTYwNzAtMzU3ZjMxZjYtOWQ3Ny00NDgwLWE4YWItZWNhNTc2OWZjMmRjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTA2VDA2MjAyMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg3NTE1YTA5YWM5M2EzOTY1MTQzOTBjNmE2ZmRhMDU1ZDEzOGRlZDE0M2ZlYjNlMzg1NTJmNzIyOWIzM2M5OWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.serIkbC1HtkQpCqlqE7yO5GcByfNjRq2q8NzufQyZn8)

Of course, if you have already deconstructed props, the deconstructed properties will be automatically recognized, such as:

![props](https://private-user-images.githubusercontent.com/49404397/364215571-47c29778-b193-4cb0-9c91-787462aad610.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU2MDM5MjEsIm5iZiI6MTcyNTYwMzYyMSwicGF0aCI6Ii80OTQwNDM5Ny8zNjQyMTU1NzEtNDdjMjk3NzgtYjE5My00Y2IwLTljOTEtNzg3NDYyYWFkNjEwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTA2VDA2MjAyMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNhNjM1ZjhmZjA5NjUyNTFkZTU0ZGE0YmU0NGNhNjQ5MWViODVkZjI1MGU4NmI2NWU5ZWRmNjRmNjZlZjY0NzcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.2POOJDOwNg8xqr0I4kbuTaJQkw-jLZQ-jlN93tQ0Jco)

### Custom hooks

Custom hooks starting with 'use'.

![custom](https://github.com/mmdctjj/react-syntax-plus/blob/master/images/screenshot-20240906-142631.png?raw=true)

## Release Notes

https://github.com/mmdctjj/react-syntax-plus/releases

**Enjoy!**
