import {isRLTLang} from '../../../../i18n';
import { Font } from "@react-pdf/renderer"
import {toAbsoluteUrl} from '../../../../helpers';

export const fontList = [
  "main1",
  "main2",
  "main3",
  "main4",
  "main5"
]

fontList.forEach((family) => {
  console.log(family)
  Font.register({
    family,
    src: 
  })
})


export default {
  body: {
    paddingTop: 35,
    paddingBottom: 15,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  table: {
    fontSize: 10,
    width: "100%",
    display: "flex",
    textAlign: !isRLTLang() ? "left" : "right",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "stretch",
    flexWrap: "nowrap",
    alignItems: "stretch"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "stretch",
    flexWrap: "nowrap",
    alignItems: "stretch",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 35
  },
  cell: {
    padding: 5,
    width:"100%;",
    //fontFamily: 'B612',
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 1,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
    alignSelf: "stretch"
  },
  headerText: {
    fontSize: 11,
    fontWeight: 1200,
    color: "#1a245c",
    margin: 8
  },
  tableText: {
    margin: 10,
    fontSize: 10,
    color: "#eee"
  }
}
