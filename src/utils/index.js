import { version } from '../../package.json'
import Cookie from './cookie.js'
const BT = {
  version: version,
  test() {
    console.log('BT')
    console.log(arguments)
  }
}
console.log('packageInfo', )
export { BT, Cookie }
