### tsup

go, esbuild, tsup【基于 esbuild 的封装】

#### 特点

- 零配置，默认支持 ts
- 性能非常好
- 多格式输出
- 代码动态导入、代码分割

#### 使用场景

- 工具库
- 脚手架

#### 缺点

- 业务构建不推荐
- 插件生态没有 rollup 繁荣


### tsup 实践

- 安装 `pnpm install typescript tsup -D`  
- 创建 `tsup.config.ts` 
- 配置：
```js
import {defineConfig} from 'tsup'

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["esm"], // 支持多模块化
    dts: true,
    minify: true
  },
  {
    entry: ["src/index.ts"],
    format: ["cjs"], // 支持多模块化
    dts: true,
    minify: true
  },
  {
    entry: ["src/index.ts"],
    format: ["iife"], // 支持多模块化
    dts: true,
    minify: true
  }
])
```