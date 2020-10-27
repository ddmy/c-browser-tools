class Url {
  getQuery (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) {
      return decodeURIComponent(r[2])
    } else {
      return null
    }
  }
  useHttps (url) {
    if (url) {
      return url.replace(/^(http:)?\/\//, 'https://')
    }
    return ''
  }
}

export default new Url()
