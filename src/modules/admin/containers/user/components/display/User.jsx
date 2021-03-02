import React from 'react'
import { injectIntl } from 'react-intl'
import {
  DisplayItems,
  RenderItems
} from './../../../../../../components/partials/controls'
import { userFields } from './fields/userFields'

const User = ({ profile = {}, error, isFetching, intl }) => {
  const fields = userFields({ intl })

  return (
    <DisplayItems
      error={error}
      isFetching={isFetching}
      object={profile}
    >
      <RenderItems fields={fields} />
    </DisplayItems>
  )
}

export default injectIntl(User)
