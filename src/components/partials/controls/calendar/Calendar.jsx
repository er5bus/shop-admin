import React, { useState } from "react"
import moment from "moment"

import { getLang } from "./../../../../i18n"
import { FR, AR } from "./../../../../constants"

import CalendarEvent from "./CalendarEvent"

import FullCalendar from "@fullcalendar/react"

// plugin
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import listPlugin from "@fullcalendar/list"
import interactionPlugin from "@fullcalendar/interaction"

import arTnLocale from "@fullcalendar/core/locales/ar-tn"
import frLocale from "@fullcalendar/core/locales/fr"


const LANGUAGES = {
  [FR]: frLocale,
  [AR]: arTnLocale
}

const Appointment = ({ isFetching, dateClick, eventClick, fetchEvents, loadEvents, ...props }) => {

  const [prevDateRange, setPrevDateRange] = useState({})

  const loadEventsCallback = (info, successCallback, failureCallback) => {
    if (info.startStr !== prevDateRange.startStr && info.endStr !== prevDateRange.endStr && !isFetching){
      fetchEvents({ start: moment(info.start).format("DD/MM/YYYY") , end: moment(info.end).format("DD/MM/YYYY") })
      setPrevDateRange(info)
    }

    loadEvents(successCallback, failureCallback)
  }

  return (
    <FullCalendar
      className="fc fc-ltr fc-unthemed"
      plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay"
      }}
      eventContent={ (eventInfo) => <CalendarEvent eventInfo={eventInfo} />}
      dateClick={dateClick}
      initialView="dayGridMonth"
      editable={false}
      selectable={true}
      locale={LANGUAGES[getLang()]}
      selectMirror={true}
      eventClick={eventClick}
      events={loadEventsCallback}
      weekends={true}
      { ...props }
    />
  )
}


export default Appointment
