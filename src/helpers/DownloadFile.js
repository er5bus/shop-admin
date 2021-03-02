import { HTTP_METHODS } from "./../constants"
import { makeCall } from "./MakeRequest"
import { store } from "./../configureStore"

export const sendDownloadRequest = (endpoint, params, filename, payload={}, headers={}, method=HTTP_METHODS.GET) => {
  
  const { token } = store.getState().common.auth || {}

  makeCall(method, endpoint, payload, {'Authorization': `Bearer  ${token.access}`}, params, {
    responseType: 'blob'
  })
    .then(resp => {
      downloadFile(resp.data, filename, "text/csv;charset=utf-8;")
    })
    .catch(err => {
      console.log(err)
    })
}



export const downloadFile = (data, filename, mime, bom) => {
  let blobData = typeof bom !== "undefined" ? [bom, data] : [data]
  let blob = new Blob(blobData, { type: mime || "application/octet-stream" })
  if (typeof window.navigator.msSaveBlob !== "undefined") {
    // IE workaround for "HTML7007: One or more blob URLs were
    // revoked by closing the blob for which they were created.
    // These URLs will no longer resolve as the data backing
    // the URL has been freed."
    window.navigator.msSaveBlob(blob, filename)
  } else {
    let blobURL =
      window.URL && window.URL.createObjectURL
        ? window.URL.createObjectURL(blob)
        : window.webkitURL.createObjectURL(blob)
    let tempLink = document.createElement("a")
    tempLink.style.display = "none"
    tempLink.href = blobURL
    tempLink.setAttribute("download", filename)

    // Safari thinks _blank anchor are pop ups. We only want to set _blank
    // target if the browser does not support the HTML5 download attribute.
    // This allows you to download files in desktop safari if pop up blocking
    // is enabled.
    if (typeof tempLink.download === "undefined") {
      tempLink.setAttribute("target", "_blank")
    }

    document.body.appendChild(tempLink)
    tempLink.click()

    // Fixes "webkit blob resource error 1"
    setTimeout(function () {
      document.body.removeChild(tempLink)
      window.URL.revokeObjectURL(blobURL)
    }, 200)
  }
}


