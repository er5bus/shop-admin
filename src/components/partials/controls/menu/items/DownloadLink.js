import React from "react"
import useDownloader from "../../../../../hooks/useDownloader"


const DownloadLink = ({ fileUrl, filename, label, icon }) => {

  const Icon = icon

  const [ isDownloding, downloadTrigger ] = useDownloader({
    endpoint: fileUrl,
    filename
  })

  return (
    <div className="navi-item mb-2">
      <div disabled={isDownloding} onClick={downloadTrigger} className="navi-link py-4">
        <span className="navi-icon mr-2">
          <span className="svg-icon">
            <Icon />
          </span>
        </span>
        <span className="navi-text font-size-lg">{ label }</span>
      </div>
    </div>
  )
}


export default DownloadLink
