/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React from "react"
import { FormattedMessage } from "react-intl"

import { Card, CardBody, CardHeader, CardHeaderToolbar, ModalProgressBar, FlashMessages, Calendar } from "../../controls"
import _ from "lodash"

import { isRLTLang } from "./../../../../i18n"

import {Button} from "react-bootstrap"

const CalendarView = ({ fetchEvents, loadEvents, dateClick, eventClick, title, goBackTo, successMsg = [], toolBar, isLoading, error, onClose }) => {

  return (
    <Card>
      <FlashMessages successMsg={successMsg} error={error} onClose={onClose} />
      {isLoading && <ModalProgressBar />}
      <CardHeader title={title}>
        <CardHeaderToolbar>
          { _.isFunction(goBackTo) && <Button
            type="button"
            onClick={goBackTo}
            className="btn btn-sm btn-light mx-2"
          >
            { isRLTLang() ?
              <>
                <FormattedMessage id="GENERAL.BACK" />
                <i className="fa fa-arrow-left" />
              </>
              : <>
                <i className="fa fa-arrow-left" />
                <FormattedMessage id="GENERAL.BACK" />
              </>
            }
          </Button>
          }
          { toolBar }
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <div id="kt_calendar" className="fc fc-ltr fc-unthemed">
          <Calendar
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            fetchEvents={fetchEvents}
            loadEvents={loadEvents}
            dateClick={dateClick}
            initialView="dayGridMonth"
            selectable={false}
            selectMirror={true}
            eventClick={eventClick}
            weekends={true}
          />
        </div>
      </CardBody>
    </Card>
  )
}


export default CalendarView
