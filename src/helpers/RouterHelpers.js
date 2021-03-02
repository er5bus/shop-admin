export const getCurrentUrl = (location) => {
  return location.pathname.split(/[?#]/)[0]
}

export const getNestedPath = (...x) => [...new Set(x.join("/").split("/"))].join("/")

export const getBaseUrl = (path) => {

  if (!path) {
    return window
    .location
    .pathname
  }

  const strEnd = window
    .location
    .pathname
    .lastIndexOf(path) + path.length

  return window
    .location
    .pathname
    .substring(0, strEnd)
    .replace(/\/\d\//g, "/:param/")
}

export const checkIsActive = (location, url) => {
  const current = getCurrentUrl(location)
  if (!current || !url) {
    return  false
  }

  if (current === url) {
    return  true
  }

  if (current.indexOf(url) > -1) {
    return true
  }

  return false
}


export const combinePathRoutes = ( routeProps = {}, ...routes ) => {

  let combinedRoutes = {}
  for (let i = 0; i < routes.length ; i++){
    combinedRoutes = Object.assign({}, combinedRoutes, Object.keys(routes[i]).reduce((combinePath, key) => {
      combinePath[key] = { ...routes[i][key] }
      Object.keys(routeProps).forEach((prop) => {
        if (combinePath[key].hasOwnProperty(prop)){
          combinePath[key][prop] = routeProps[prop] + combinePath[key][prop]
        }else {
          combinePath[key][prop] = routeProps[prop]
        }
      })
      return combinePath
    }, {}))
  }

  return combinedRoutes
}
