import React from 'react'
import PropTypes from 'prop-types'
import ViewComponent from './ViewComponent'

LoadingRequest = ({loading}) => {
  if (!loading) return null
  return <ViewComponent/>
}

LoadingRequest.defaultProps = {
  loading: false
}

LoadingRequest.propTypes = {
  loading: PropTypes.bool,
}

export default LoadingRequest