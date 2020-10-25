class Image {
  convertBase64ToBlob (base64, type) {
    var format = type || (base64.slice(0, 20).indexOf('image/png') > -1 ? 'image/png' : 'image/jpeg')
    var code = window.atob(base64.split(',')[1])
    var aBuffer = new window.ArrayBuffer(code.length)
    var uBuffer = new window.Uint8Array(aBuffer)
    for (var i = 0; i < code.length; i++) {
      uBuffer[i] = code.charCodeAt(i)
    }
    var Builder = window.WebKitBlobBuilder || window.MozBlobBuilder
    if (Builder) {
      var builder = new Builder()
      builder.append(uBuffer)
      return builder.getBlob(format)
    } else {
      return new window.Blob([uBuffer], {
        type: format
      })
    }
  }
}

export default new Image()
