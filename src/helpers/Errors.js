import { ERROR_CODES } from '../constants'

export class ForbiddenError extends Error {
}

export class PermissionDeniedError extends ForbiddenError {
  constructor (message) {
    super(message)
    this.name = 'PermissionDenied'
  }
}

export class AuthenticationError extends ForbiddenError {
  constructor (message) {
    super(message)
    this.name = 'AuthenticationError'
  }
}

export const formatErrorMessage = (error) => {
  const { status, data = {} } = error
  const { code = undefined } = data

  if (status === 400 && !code) {
    return "ERROR.CODE.FORM_FAILED"
  }
  return ERROR_CODES[(code || status)] || 'ERROR.CODE.INTERNAL_ERROR'
}
