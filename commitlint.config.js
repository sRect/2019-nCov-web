// https://github.com/conventional-changelog/commitlint
// npm install --save-dev @commitlint/config-conventional @commitlint/cli
// https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional/index.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'], // 0为disable，1为warning，2为error
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',    // 构建系统或外部依赖项的更改
        'chore',    // 修改工具相关（包括但不限于文档、代码生成等, 比如修改了README，webpack配置文件等等）
        'ci',       // 自动化流程配置或脚本修改
        'docs',     // 修改文档
        'feat',     // 新功能
        'fix',      // 修复问题
        'perf',     // 提升页面性能
        'refactor', // 重构代码(fix bug或增加新功能不属于此范围)
        'revert',   // 回滚代码
        'style',    // 修改代码格式(不影响逻辑功能，比如格式化、补充分号等等)
        'test',     // 增加 / 修改测试用例
        'deps'      // 升级依赖
      ]
    ]
  }
};