import { HTTP_METHODS } from "./../../../../constants"
import { makeCall } from "./../../../../helpers"

const FETCH_CATEGORIES_ENDPOINT = "/api/categories/all"

const formatCategories = (categories) => categories.map((category) => ({ label: category.categoryName, value: category.id }) )


export const categoryUIHelper = (callback) => {

  return new Promise((resolve, reject) =>
    makeCall(HTTP_METHODS.GET, FETCH_CATEGORIES_ENDPOINT, {}, {})
    .then(resp => {
      resolve(callback(formatCategories( resp.data )))
    })
    .catch(err => reject(err.response))
  )
}
