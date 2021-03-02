import { HTTP_METHODS } from "./../../../../constants"
import { makeCall } from "./../../../../helpers"

const FETCH_PRODUCTS_ENDPOINT = "/api/products/all"

const formatProducts = (products) => products.map((product) => ({ label: product.productName, value: product.id }) )


export const productUIHelper = (callback) => {

  return new Promise((resolve, reject) =>
    makeCall(HTTP_METHODS.GET, FETCH_PRODUCTS_ENDPOINT, {}, {})
    .then(resp => {
      resolve(callback(formatProducts( resp.data )))
    })
    .catch(err => reject(err.response))
  )
}
