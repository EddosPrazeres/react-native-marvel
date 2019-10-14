import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ViewComponent from './ViewComponent'


EmptyRequest = ({loading, count, message, from, searchHeroesLoaded}) => {
  console.log(searchHeroesLoaded)
  let newMessage = message;
  if (loading) return null
  if (count == 0) {
    if (from == "searched" && searchHeroesLoaded) newMessage = "Parece que eu eliminei este herói, melhor tentar encontra outro que talvez tenha sobrevivido ;)"
    return <ViewComponent loading={loading} count={count} message={newMessage}/>
  }
  return null
}

EmptyRequest.defaultProps = {
  loading: false,
  count: 0,
  from: 'heroes',
}

EmptyRequest.propTypes = {
  loading: PropTypes.bool,
  count: PropTypes.number,
  message: PropTypes.string,
  from: PropTypes.string,
}

export default EmptyRequest