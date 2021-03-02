import React from 'react'
import { FormattedMessage } from "react-intl"
import { /* ListGroup,*/ OverlayTrigger, Tooltip } from 'react-bootstrap'

import { getLang } from "./../../../../i18n"
import { AR, FR } from "./../../../../constants"
import {getAttr} from '../../../../helpers'

const PARTICIPANT = {
  [FR]: ["participants[].firstName", "participants[].lastName"],
  [AR]: ["participants[].firstNameAr", "participants[].lastNameAr"]
}

const BENEFICIARYS = {
  [FR]: ["folders[].firstNameFr", "folders[].lastNameFr"],
  [AR]: ["folders[].firstNameAr", "folders[].lastNameAr"]
}


const CalendarEvent = ({ eventInfo }) => (
  <>
    <OverlayTrigger
      overlay={
        <Tooltip id={`tooltip-${eventInfo.event.id}`}>
          <>
            { eventInfo.event.title }
          </>
          {/*<ListGroup variant='flush'>
            { eventInfo.event._def.extendedProps.participants && eventInfo.event._def.extendedProps.participants.map((participant) => (
              <ListGroup.Item>
                <>
                  { get(participant, PARTICIPANTS_FIRST_NAME[getLang()], " ") }
                  { " " }
                  { get(participant, PARTICIPANTS_LAST_NAME[getLang()], " " ) }
                </>
              </ListGroup.Item>
            )) }
          </ListGroup>*/}
        </Tooltip>
      }
    >
      <div className={ eventInfo.view.type === "dayGridMonth" ? `fc-content` : ( eventInfo.view.type !== "listWeek" ? `fc-list-content` : ``) }>
        { eventInfo.view.type === "dayGridMonth" && <span className='fc-content-icon'>
          <i className={`fas fa-circle text-${eventInfo.event._def.extendedProps.eventColor}`} />
        </span>
        }
        <span className='fc-time'>
          {eventInfo.timeText}
        </span>
        <span className='fc-title'>
          { getAttr(eventInfo.event._def.extendedProps, PARTICIPANT[getLang()], <FormattedMessage id="GENERAL.EMPTY" />) }
          {" "}<span class="fas fa-long-arrow-alt-right" />{" "}
          { getAttr(eventInfo.event._def.extendedProps, BENEFICIARYS[getLang()], <FormattedMessage id="GENERAL.EMPTY" />) }
          {" "}<span class="fas fa-long-arrow-alt-right" />{" "}
          {eventInfo.event.title}
        </span>
      </div>
    </OverlayTrigger>
  </>
)

export default CalendarEvent
