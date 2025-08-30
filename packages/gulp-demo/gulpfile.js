import {series} from 'gulp'
function javascript(cb) {
  console.log('javascript')

  cb()
}

function css(cb) {
  console.log('css')
  cb()
}

function typescript(cb) {
  console.log('typescript')
  cb()
}

export const build = series(typescript)


export default series(javascript, css)