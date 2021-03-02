import moment from "moment"

export const minuteUIHelper = (valueFormat = "mm", labelFormat = "mm") => {

  const minutes = []
  for (let time = moment().startOf("hour"); time.isBefore(moment().endOf("hour")); time.add(1, 'minute') ){
    minutes.push({ label: time.locale('en').format(labelFormat), value: time.locale('en').format(valueFormat) })
  }
  return minutes
}
