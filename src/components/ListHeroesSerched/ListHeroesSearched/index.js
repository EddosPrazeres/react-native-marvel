import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Creators as MarvelActions} from '../../../redux/reducers/Marvel'
import PropTypes from 'prop-types'
import ViewComponent from './ViewComponent'

class ListHeroesSearched extends Component {
  render(){
    return(
      <ViewComponent {...this.props}/>
    )
  }
}

ListHeroesSearched.defaultProps = {
  searchHeroes: []
}

ListHeroesSearched.propTypes = {
  searchHeroes: PropTypes.array,
}

const mapStateToProps = state => {
  return {
    searchHeroes: state.Marvel.searchHeroes,
    loadingSearch: state.Marvel.loadingSearch,
    searchHeroesLoaded: state.Marvel.searchHeroesLoaded
  }
}

export default connect(
  mapStateToProps,
  {...MarvelActions}
)(ListHeroesSearched)