import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Creators as MarvelActions} from '../../../redux/reducers/Marvel'
import PropTypes from 'prop-types'
import ViewComponent from './ViewComponent'

class ListHeroes extends Component {
  state = {
    offset: 0,
    loading: false,
  }

  componentDidMount = () => this.loadHeroes()

  loadHeroes = () => { 
    const { offset, loading } = this.state;
    const { getHeroes } = this.props;
    if (loading) return
    
    this.setState({loading: true})
    
    getHeroes(offset).then(()=> {
      this.setState({
        offset: offset + 10, 
        loading: false
      })
    })
  }

  render(){
    const { loading } = this.state;

    return(
      <ViewComponent {...this.props} loadHeroes={() => this.loadHeroes()} loading={loading}/>
    )
  }
}

ListHeroes.defaultProps = {
  heroes: []
}

ListHeroes.propTypes = {
  heroes: PropTypes.array,
}

const mapStateToProps = state => {
  return {
    heroes: state.Marvel.heroes
  }
}

export default connect(
  mapStateToProps,
  {...MarvelActions}
)(ListHeroes)