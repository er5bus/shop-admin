import React from 'react'
import { FormattedMessage } from 'react-intl'

import { toAbsoluteUrl } from '../../../../helpers'
import ShowView from './ShowView'

const LockedView = ({ message, ...props }) => {
  return (
    <ShowView { ...props }  print={false}>
      <div className="text-center">
        <img width='502' height='300' alt='not found' src={toAbsoluteUrl('/media/error/stop.svg')} />
        <div className='text-dark font-weight-bold'>{message || <FormattedMessage id='ERROR.FORBIDDEN.DESC' />}</div>
      </div>
    </ShowView>
  )
}

export default LockedView
