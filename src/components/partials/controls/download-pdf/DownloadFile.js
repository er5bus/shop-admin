import React from "react"
import PrintIcon from "@material-ui/icons/Print"
import useDownloader from "../../../../hooks/useDownloader"
import {Button} from "react-bootstrap"


const DownloadFile = ({ endpoint, params={}, filename = "export.xlsx" }) => {

  const [ isDownloading, downloadTrigger ] = useDownloader({
    endpoint,
    params,
    filename
  })

  return (
    <Button
      disabled={isDownloading}
      onClick={downloadTrigger}
      className="btn btn-sm btn-success mx-3 my-1 "
    >
      {isDownloading && <span className="px-5 spinner spinner-white" />}
      <PrintIcon />
    </Button>
  )
}


export default DownloadFile
