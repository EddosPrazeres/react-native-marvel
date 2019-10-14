import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Creators as MarvelActions} from '../../redux/reducers/Marvel'
import PropTypes from 'prop-types'
import ViewComponent from './ViewComponent'

class SearchScreen extends Component {
  render(){
    return(
      <ViewComponent {...this.props}/>
    )
  }
}

SearchScreen.defaultProps = {

}

SearchScreen.propTypes = {

}


const mapStateToProps = state => {
  return {
    searchHeroes: state.Marvel.searchHeroes,
    loadingSearch: state.Marvel.loadingSearch,
  }
}

export default connect(
  mapStateToProps,
  {...MarvelActions}
)(SearchScreen)