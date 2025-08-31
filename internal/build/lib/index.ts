import {glob} from 'glob'
import {resolve, join} from 'node:path'
import { PACKAGES, CORE_ENTRY_DIR_NAME } from '@mal-build/utils'
import {run} from './utils'

// 获取 src 目录下的所有 vue 文件路径
async function getWorkPath() {
  return glob(`**/${CORE_ENTRY_DIR_NAME}/**/*.vue`, {
    ignore: "node_modules",
    cwd: PACKAGES,
    absolute: true
  })
};

export const build = async () => {
  let files = await getWorkPath()
  console.log('files: ', files)
  // Generate .d.ts files
  await run(
    'npx vue-tsc -p tsconfig.web.json --declaration --emitDeclarationOnly --declarationDir dist/types'
  )
  // TODO：将生成的types文件移动到指定的目录下「如 es 目录下」
}