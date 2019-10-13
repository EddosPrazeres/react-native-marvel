import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ViewComponent from './ViewComponent'

class SearchScreen extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <ViewComponent title={"SearchScreen"} />
    )
  }
}

SearchScreen.defaultProps = {

}

SearchScreen.propTypes = {

}

export default SearchScreen