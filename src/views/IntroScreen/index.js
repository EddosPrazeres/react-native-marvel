import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ViewComponent from './ViewComponent'

class IntroScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showRealApp: false, 
      slides: [{
          top: false,
          key: 'somethun',
          title: 'Explore rotas \n',
          titleDescription: 'exclusivas para você',
          text: 'Conheça os melhores restaurantes e lugares avaliados',
          image: require('../../../assets/Grupo1801.svg'),
          // backgroundColor: '#59b2ab',
        }, {
          top: false,
          key: 'somethun-dos',
          title: 'O maior cartão postal \n do Rio',
          titleDescription: 'é o carioca',
          text: 'Ajude no crescimento da cidade e ganhe recompensas turísticas',
          image: require('../../../assets/Grupo1802.svg'),
          // backgroundColor: '#febe29',
        }, {
          top: true,
          key: 'somethun1',
          title: 'Aproveite \n',
          titleDescription:'ainda mais a sua cidade',
          text: 'Ganhe ingressos e visite os pontos turísticos da sua cidade',
          image: require('../../../assets/Grupo1803.svg'),
          // image: require('./assets/3.jpg'),
          // backgroundColor: '#22bcb5',
        }
      ]
    }
  }

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }

  render(){
    return(
      <ViewComponent _onDone={this._onDone} showRealApp={this.state.showRealApp} slides={this.state.slides} navigation={this.props.navigation}/>
    )
  }
}

export default IntroScreen