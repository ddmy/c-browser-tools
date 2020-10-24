import { BT, Cookie } from './utils/index.js'

if (module.hot) {
  module.hot.accept();
}

console.log('index.js初始化', BT, Cookie)
