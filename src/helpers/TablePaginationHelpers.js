/* Pagination Helprs */
import React from "react"

export const getPagesCount = (totalSize, sizePerPage) => {
  return Math.ceil(totalSize / sizePerPage)
}

export const getPages = (page, pagesCount, paginationSize) => {
  const result = []
  if (!page) {
    return result
  }

  if (pagesCount === 1) {
    result.push(1)
    return result
  }

  if (pagesCount < page) {
    return result
  }

  if (pagesCount < paginationSize + 1) {
    for (let i = 1 ; i < pagesCount + 1 ; i++) {
      result.push(i)
    }
    return result
  }

  if (page === 1) {
    for (let i = 1 ; i < paginationSize + 1 ; i++) {
      if (i < pagesCount) {
        result.push(i)
      }
    }
    return result
  }

  if (page === pagesCount) {
    for (let i = pagesCount - paginationSize + 1 ; i <= pagesCount ; i++) {
      if (i <= pagesCount) {
        result.push(i)
      }
    }
    return result
  }

  const shiftCount = Math.floor(paginationSize / 2)
  if (shiftCount < 1) {
    result.push(page)
    return result
  }

  //
  if (page < shiftCount + 2) {
    for (let i = 1 ; i < paginationSize + 1 ; i++) {
      result.push(i)
    }
    return result
  }

  if (pagesCount - page < shiftCount + 2) {
    for (let i = pagesCount - paginationSize ; i < pagesCount + 1; i++) {
      result.push(i)
    }
    return result
  }

  for (let i = page - shiftCount; i < page; i++) {
    if (i > 0) {
      result.push(i)
    }
  }
  result.push(page)
  for (let i = page + 1; i < page + shiftCount + 1; i++) {
    if (i <= pagesCount) {
      result.push(i)
    }
  }

  return result
}

export const getHandlerTableChange = (setQueryParams) => (type, { page, sizePerPage, sortField, sortOrder, data }) => {
  setQueryParams((prev) =>
    type === "sort"
    ? { ...prev, page, sort_order: sortOrder, sort_field: sortField }
    : type === "pagination"
    ? { ...prev, page, page_size: sizePerPage }
    : prev
  )
}


export const PleaseWaitMessage = ({ entities }) => (
  <>{entities === null && <div>Please wait...</div>}</>
)

export const NoRecordsFoundMessage = ({ entities }) => {
  const customersList = entities === null ? [] : entities
  return (
    <>
      {customersList.length === 0 && entities !== null && (
        <div>No records found</div>
      )}
    </>
  )
}
