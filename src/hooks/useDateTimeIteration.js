import { getLang } from '../i18n'

import moment from 'moment'

import 'moment/locale/ar-tn'
import 'moment/locale/fr'


const addTime = (time, sessionTime) => {
  const regex = /(?<hour>\d{2}):(?<minute>\d{2})/g
  const timeToAdd = regex.exec(sessionTime)
  if (timeToAdd && timeToAdd[1]) {
    time.add(timeToAdd[1], 'hour')
  }

  if (timeToAdd && timeToAdd[2]) {
    time.add(timeToAdd[2], 'minute')
  }
  return time
}

const checkAvailablity = (startDate, endDate, availabilities = [], lookup=undefined) => {
  return availabilities.some((availability) => {
    const availabilityStartDate = moment(availability.startHour, 'HH:mm:ss')
    const availabilityEndDate = moment(availability.endHour, 'HH:mm:ss')
    availabilityStartDate.set({y: startDate.year(), M: startDate.month(), D: startDate.date()})
    availabilityEndDate.set({y: endDate.year(), M: endDate.month(), D: endDate.date()})

    return startDate.clone().add(1, "minute").isBetween(availabilityStartDate, availabilityEndDate, lookup, '[]')
      || endDate.clone().subtract(1, "minute").isBetween(availabilityStartDate, availabilityEndDate, lookup, '[]')
  })
}

const timeInterval = (startHour, endHour, sessionTime, availabilities) => {
  const timeArray = []
  for (
    let start = startHour.clone(), next = addTime(start.clone(), sessionTime);
    (start.isSameOrBefore(endHour)) && (next.isSameOrBefore(endHour));
    start = addTime(start.clone(), sessionTime),
    next = addTime(next.clone(), sessionTime)
  ) {
    if (!checkAvailablity(start, next, availabilities)){
      timeArray.push({ start: start.locale('en').format('HH:mm'), end: next.locale('en').format('HH:mm') })
    }
  }
  return timeArray
}

const daysInterval = (startDate, endDate, callback) => {
  const startOfWeek = startDate.clone()
  const endOfWeek = endDate.clone()

  const currentDays = []
  for (const m = startOfWeek.startOf('day'); m.isBefore(endOfWeek); m.add(1, 'days')) {
    const extra = callback ? callback(m) : {}
    currentDays.push({ day: m.locale(getLang()).format('DD dddd'), date: m.format('DD/MM/YYYY'), format: m.format('YYYY-MM-DD'), ...extra })
  }
  return currentDays
}

const dayInterval = (
  startDate,
  endDate,
  sessionTime,
  beforeMiddayStartHour,
  beforeMiddayEndHour,
  afterMiddayStartHour,
  afterMiddayEndHour,
  availabilities
) => {

  const availabilitiesPerDay = availabilities.reduce((acc, availability) => {
    acc[availability.date] = [...(acc[availability.date] || []), availability]
    return acc
  }, {})

  return daysInterval(startDate, endDate, (day) => ({
    beforeMidday: timeInterval(moment(beforeMiddayStartHour, "HH:mm"), moment(beforeMiddayEndHour, "HH:mm"), sessionTime, availabilitiesPerDay[day.format('YYYY-MM-DD')]),
    afterMidday: timeInterval(moment(afterMiddayStartHour, "HH:mm"), moment(afterMiddayEndHour, "HH:mm"), sessionTime, availabilitiesPerDay[day.format('YYYY-MM-DD')])
  }))
}

const useDateTimeIteration = ({
  startDate,
  endDate,
  sessionTime,
  beforeMiddayStartHour,
  beforeMiddayEndHour,
  afterMiddayStartHour,
  afterMiddayEndHour,
  availabilities = {}
}) => {
  return {
    header: daysInterval(startDate, endDate),
    body: Object.keys(availabilities).map((key) => ({
      user: key,
      availabilities: dayInterval(
        startDate,
        endDate,
        sessionTime,
        beforeMiddayStartHour,
        beforeMiddayEndHour,
        afterMiddayStartHour,
        afterMiddayEndHour,
        availabilities[key]
      )
    })
    )
  }
}

export default useDateTimeIteration
