export const removeCSSClass = (ele, cls) => {
    const reg = new RegExp("(\\s|^)" + cls + "(\\s|$)")
    ele.className = ele.className.replace(reg, " ")
}

export const addCSSClass = (ele, cls) => {
    ele.classList.add(cls)
}

export const isValidURL = (str) => {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i') // fragment locator
  return !!pattern.test(str)
}

export const getBase64 = (file, callback) => {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => callback(reader.result)
  //reader.onerror = error => {}
}

export const toAbsoluteUrl = pathname => {
  const PUBLIC_URL = window.location.toString().replace(window.location.pathname, "")
  return PUBLIC_URL + pathname
}
