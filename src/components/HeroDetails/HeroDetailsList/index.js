import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ViewComponent from './ViewComponent'

class HeroDetailsList extends Component {

  getItemLayout =({data, index}) => {
    return  { length: 50, offset: 50 * index, index }
  }

  render(){
    const { name, list} = this.props;
    return(
      <ViewComponent name={name} list={list} getItemLayout={this.getItemLayout}/>
    )
  }
}

HeroDetailsList.defaultProps = {
  name: '',
  list: []
}

HeroDetailsList.propTypes = {
  name: PropTypes.string,
  list: PropTypes.array,
}

export default HeroDetailsList