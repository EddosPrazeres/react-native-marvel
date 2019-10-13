import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ViewComponent from './ViewComponent'

EmptyRequest = ({loading, count, message}) => {
  if (loading) return null
  if (count == 0) return <ViewComponent loading={loading} count={count} message={message}/>
  return null
}

EmptyRequest.defaultProps = {
  loading: false,
  count: 0,
}

EmptyRequest.propTypes = {
  loading: PropTypes.bool,
  count: PropTypes.number,
  message: PropTypes.string
}

export default EmptyRequest