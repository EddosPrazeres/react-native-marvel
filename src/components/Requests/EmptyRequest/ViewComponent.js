import React from 'react'
import { Container, ImageBG, Message, MessageText, MessageArrow} from './styles'
import PropTypes from 'prop-types'


const ViewComponent = ({message}) => {
  return (
    <Container>
      <ImageBG source={require('../../../../assets/EmptyHero.jpg')} resizeMode="cover"></ImageBG>
      <Message> 
        <MessageArrow /> 
        <MessageText>{message}</MessageText> 
      </Message>
    </Container>
  );
}

ViewComponent.defaultProps = {
  message: `Opss, acho que eliminei esse herói. ${"\n"} Tente encontrar algum sobrevivente ;)`
}

ViewComponent.propTypes = {
  message: PropTypes.string,
}

export default ViewComponent