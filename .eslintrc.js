module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "babel-eslint", // https://stackoverflow.com/questions/53609457/eslint-parsing-error-unexpected-token-in-jsx
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  "plugins": [
    "react"
  ],
  // ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：
  // "off" 或 0 - 关闭规则
  // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  "rules": {
    "no-console": 0,
    "react/prop-types": 2,
    "react/display-name": 0
  },
  "settings": {
    "react": {
      "version": "detect" // React version. "detect" automatically picks the version you have installed.                                               
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.                                              
      // default to latest and warns if missing                                             
      // It will default to "detect" in the future                 
    }
  }
};