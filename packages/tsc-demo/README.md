## tsc 编译

### 使用
1. 安装 `pnpm install typescript -D`
2. 配置 `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "esnext", // ts代码转换目标
    "module": "esnext", // 指定模块类型，这里有超多的类型，你该怎么选择呢
    "outDir": "dist", // 指定输出文件
    "declaration": true // dts 文件的输出
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"] // 排除
}
```
3. 指定编译命令
```json
{
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch"
  }
}
```

#### 特点：

- 强类型检查
- 专注于 ts 编译，支持 js 编译、类型输出 dts
- 单文件编译

#### 使用场景：  

- 早期项目，没有复杂的编译需求
- 工具类、后端 node

#### 缺点：  

- 仅仅支持 ts 编译
- 无法代码拆分、模块打包
- 性能差，大规模项目性能堪忧
- 配置繁琐，tsconfig，有时需要借助 babel、postcss

