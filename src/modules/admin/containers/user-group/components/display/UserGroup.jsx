import React from 'react'
import { injectIntl } from 'react-intl'

import {
  DisplayItems
} from './../../../../../../components/partials/controls'
import userGroupFields from './fields/userGroupFields'

const UserGroupTemplate = ({ userGroup = {}, isFetching, intl }) => {

  const fields = userGroupFields({ intl })

  return (
    <DisplayItems 
      isFetching={isFetching} 
      object={ userGroup } 
      fields={fields} 
    />
  )
}

export default injectIntl(UserGroupTemplate)
