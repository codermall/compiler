### rollup  编译

#### 特点

- tree-shaking 
- 简化配置，tsc、webpack
- 丰富的插件生态，将功能的生态构建交给全世界的开发者，框架插件规则制定者

#### 使用场景

- UI 库
- 工具库，vue-use、react-use
- 按需导入的场景

#### 缺点

- 对大型业务项目不适合，vite、webpack 才合适
- 热更新方面
- 性能方面


### rollup 实践

#### ts 的编译

安装 `pnpm install @rollup/plugin-typescript -D` ，但是实际上我们也可以使用 `pnpm install rollup-plugin-esbuild -D` 去处理 ts 文件。

> tsconfig.json 可以配置，用于vscode 等工具以及工程去考虑，编译的时候可以不需要的