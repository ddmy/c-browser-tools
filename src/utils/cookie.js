class Cookie {
  getCookie (name) {
    var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    var arr = document.cookie.match(reg)
    if (arr) {
      if (typeof unescape(arr[2]) === 'string' && unescape(arr[2]) === 'null') {
        return JSON.parse(unescape(arr[2]))
      }
      return unescape(arr[2])
    }
    return null
  }
  clearCookie () {
    var keys = document.cookie.match(/[^ =;]+(?==)/g)
    if (keys) {
      for (var i = keys.length; i--;) {
        document.cookie = keys[i] + '=;expires=' + new Date(0).toUTCString()
      }
    }
  }
  // 设置过期时间，以毫秒为单位
  setCookie (name, value, hours = 72 * 60 * 60 * 1000, path = '/', domain = '') {
    var exp = new Date()
    exp.setTime(exp.getTime() + hours)
    document.cookie = name + '=' + value + ';expires=' + exp.toGMTString() + ';path=' + path + (domain ? `;domain=${domain}` : '')
  }
}

export default new Cookie()
