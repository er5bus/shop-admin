import moment from "moment"


export const hoursUIHelper = (valueFormat = "HH", labelFormat = "HH") => {

  const minutes = []
  for (let time = moment().startOf("day"); time.isBefore(moment().endOf("day")); time.add(1, 'hour') ){
    minutes.push({ label: time.locale('en').format(labelFormat), value: time.locale('en').format(valueFormat) })
  }
  return minutes
}
