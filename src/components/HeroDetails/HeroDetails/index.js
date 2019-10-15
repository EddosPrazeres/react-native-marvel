import React, { Component } from 'react'
import ViewComponent from './ViewComponent'

import { connect } from 'react-redux'
import {Creators as MarvelDetailsActions} from '../../../redux/reducers/MarvelDetails'

class HeroDetails extends Component {
  componentDidMount = () => this.detailAssembler()

  detailAssembler = () => {
    const details = ["comics", "series", "stories", "events"];
    const detailsLength = details.length;

    for (let i = 0; i < detailsLength; i++) {
      this.props.getHeroDetails(details[i], this.props.hero.id)
    }
  }

  render(){
    const { hero } = this.props;

    return(
      <ViewComponent hero= {hero}/>
    )
  }
}

const mapStateToProps = state => { 
  return {
    hero: state.Marvel.hero,
  }
}

export default connect(
  mapStateToProps, 
  {
    ...MarvelDetailsActions
  }
)(HeroDetails)