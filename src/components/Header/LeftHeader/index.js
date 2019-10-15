import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Creators as MarvelActions} from '../../../redux/reducers/Marvel'
import {Creators as MarvelDetailsActions} from '../../../redux/reducers/MarvelDetails'
import PropTypes from 'prop-types'
import ViewComponent from './ViewComponent'
import { withNavigation } from 'react-navigation';
class LeftHeader extends Component {
    onPress = () => {
        this.props.clearHeroDetails([])
        this.props.navigation.goBack();
    }

    render(){
        return(
            <ViewComponent onPress={()=> this.onPress()} size={18} name="chevron-left"/>
        )
    }
}

LeftHeader.defaultProps = {

}

LeftHeader.propTypes = {

}


const mapStateToProps = state => {
  return {
    loadingSearch: state.Marvel.loadingSearch,
  }
}

export default connect(
    mapStateToProps,
    {
        ...MarvelActions,
        ...MarvelDetailsActions
    }
)(withNavigation(LeftHeader))