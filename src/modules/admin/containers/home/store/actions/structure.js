import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../constants"


export const clearSructureError = () => 
  ({
    type: ACTIONS.CLEAR_STORE
  })


export const filterStructures = (searchTerm) =>
  ({
    type: ACTIONS.FILTER_STRUCTURES,
    payload: { searchTerm }
  })


export const fetchStructures = (pageNum) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_STRUCTURES_INIT,
        success: ACTIONS.FETCH_STRUCTURES_SUCCEDED,
        fail: ACTIONS.FETCH_STRUCTURES_FAILED
      },
      endpoint: ENDPOINTS.STRUCTURES,
      method: HTTP_METHODS.GET,
      params: { page: pageNum },
      auth: true
    }
  })


export const createStructure = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_STRUCTURE_INIT,
        success: ACTIONS.CREATE_STRUCTURE_SUCCEDED,
        fail: ACTIONS.CREATE_STRUCTURE_FAILED
      },
      endpoint: ENDPOINTS.STRUCTURES,
      method: HTTP_METHODS.POST,
      auth: true
    }
  })


export const editStructure = (param, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_STRUCTURE_INIT,
        success: ACTIONS.EDIT_STRUCTURE_SUCCEDED,
        fail: ACTIONS.EDIT_STRUCTURE_FAILED
      },
      endpoint: ENDPOINTS.STRUCTURE.replace(":param", param),
      method: HTTP_METHODS.PUT,
      auth: true
    }
  })


export const deleteStructure = (param) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_STRUCTURE_INIT,
        success: ACTIONS.DELETE_STRUCTURE_SUCCEDED,
        fail: ACTIONS.DELETE_STRUCTURE_FAILED
      },
      endpoint: ENDPOINTS.STRUCTURE.replace(":param", param),
      extraData: { uid: param },
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })


export const fetchStructure = ({param}) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_STRUCTURE_INIT,
        success: ACTIONS.FETCH_STRUCTURE_SUCCEDED,
        fail: ACTIONS.FETCH_STRUCTURE_FAILED
      },
      endpoint: ENDPOINTS.STRUCTURE.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })
