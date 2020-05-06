## 4DAnlog React技术栈

## 使用 
```bash
yarn start # 启动本地开发服务
yarn build # 生产打包
yarn run changelog # CHANGELOG.md
```

### 项目主要依赖及版本
+ react(^16.13.1)
+ react-router(^5.1.2)
+ redux(^4.0.5)
+ antd-mobile(^2.3.1)
+ axios(^0.19.2)
+ styled-components(^5.0.1)
+ immutable(^4.0.0-rc.12)

### 项目结构
```
├── build
├── CHANGELOG.md
├── commitlint.config.js
├── config
├── CONTRIBUTING.md
├── node_modules
├── package.json
├── public
├── README.md
├── scripts
├── src
    ├── api                 // 网路请求代码和相关配置
    ├── application         // 项目核心功能
    ├── assets              // 字体配置及全局样式
    ├── baseUI              // 基础 UI 轮子,如loading等
    ├── components          // 可复用的 UI 组件
    ├── config              // 配置文件
    ├── pages               // 页面
    ├── routes              // 路由配置文件
    ├── store               // redux
    ├── utils               // 工具库
    ├── index.js            // 入口文件
    ├── App.js              // 根组件
    ├── App.test.js
    ├── serviceWorker.js
    ├── setupTests.js
    └── style.js           // 默认样式
├── yarn-error.log
└── yarn.lock
```

### 项目自动化
- Husky + Commitlint + Lint-staged + Prettier + Eslint + Stylelint
- git commit提交代码会自动进行`eslint --fix` 和 `prettier --write`
- 执行`yarn run test:lint:js` 对整个项目js代码进行错误检测
- 执行`yarn run test:lint:css` 对整个项目css代码进行错误检测
- 执行`yarn run fix:lint:js` 对整个项目js代码进行eslint修复
- 执行`yarn run test:lint:css` 对整个项目css代码进行stylelint修复
- 执行`yarn run prettier` 对整个项目js代码进行风格美化

1. vscode编辑器安装prettier:   https://github.com/prettier/prettier-vscode
2. prettier配置项： https://prettier.io/docs/en/configuration.html
3. 在create-react-app中使用prettier:  https://create-react-app.dev/docs/setting-up-your-editor#formatting-code-automatically
4. styleint规则配置 https://stylelint.io/user-guide/rules/list
