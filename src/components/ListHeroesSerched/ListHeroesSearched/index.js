import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Creators as MarvelActions} from '../../../redux/reducers/Marvel'
import PropTypes from 'prop-types'
import ViewComponent from './ViewComponent'
import { withNavigation } from 'react-navigation';

class ListHeroesSearched extends Component {
  setHero = (hero) => {
    this.props.selectHero(hero)
    this.props.navigation.navigate('HeroDetailsScreen')
  }

  render(){
    return(
      <ViewComponent {...this.props} setHero={(hero) => this.setHero(hero)}/>
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
)(withNavigation(ListHeroesSearched))