import React, { memo, useCallback, useState } from "react"
import PrintIcon from "@material-ui/icons/Print"
import _ from "lodash"
import { useDisplayUIContext } from "../display/context/DisplayUIContext"
import DownloadFile from "./DownloadFile"
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
import { Button } from "react-bootstrap"
import useDocDefinition from "./useDocDefinition"
import { toAbsoluteUrl } from "../../../../helpers"
import { isRLTLang } from "../../../../i18n"

pdfMake.vfs = pdfFonts.pdfMake.vfs

pdfMake.fonts = {
  main: {
    normal: toAbsoluteUrl(!isRLTLang() ? "/media/font/B612.ttf" : "/media/font/BigVesta.ttf"),
    bold: toAbsoluteUrl(!isRLTLang() ? "/media/font/B612-Bold.ttf" : "/media/font/BigVesta-Bold.ttf"),
    italics: toAbsoluteUrl(!isRLTLang() ? "/media/font/B612.ttf" : "/media/font/BigVesta.ttf"),
    bolditalics: toAbsoluteUrl(!isRLTLang() ? "/media/font/B612.ttf" : "/media/font/BigVesta.ttf")
  }
}

const DownloadItems = ({ title, printURL }) => {
  const displayUIProps = useDisplayUIContext()
  const { fields, object, isFetching } = displayUIProps

  const documentDefinition = useDocDefinition({ fields, object, title })
  const [isDownloading, setDownloading] = useState(false)

  const sleep = (ms) =>  new Promise(resolve => setInterval(resolve, ms))

  const download = (attempts = 5) => {
    let downloaded = false
    pdfMake.createPdf(documentDefinition).download("file.pdf", () => {
      setDownloading(false)
      downloaded = true
    })
    sleep(1000).then(() => {
      if (attempts < 0){
        setDownloading(false)
      } else if (!downloaded && attempts > 0) {
        download(attempts - 1)
      }
    })
  }

  const onDownloadPDF = useCallback(() => {
    setDownloading(true)
    download()
  }, [fields, object])

  if (!_.isEmpty(printURL)) {
    return <DownloadFile endpoint={printURL} />
  }

  if (_.isEmpty(object) || isFetching) {
    return <></>
  }

  return (
    <Button
      disabled={isDownloading}
      onClick={onDownloadPDF}
      className="btn btn-sm btn-success mx-3 my-1 "
    >
      {isDownloading && <span className="px-5 spinner spinner-white" />}
      <PrintIcon />
    </Button>
  )
}

export default memo(DownloadItems)
