import React from 'react'
import { Container, ImageBG, ImageBGOverlay, Name} from './styles'
import PropTypes from 'prop-types'
import { Touchable } from '../../../components'

const ViewComponent = (props) => {
  return (
    <Touchable onPress={()=> props.setHero(props.item)}>
      <Container>
        <ImageBG resizeMode="cover" source={{uri: `${props.item.thumbnail.path}.${props.item.thumbnail.extension}`}}> 
          <ImageBGOverlay/>
        </ImageBG>        
        <Name> {props.item.name} </Name>
      </Container>
    </Touchable>
  );
}

ViewComponent.propTypes = {
  item: PropTypes.object.isRequired,
  setHero: PropTypes.func.isRequired,
}

export default ViewComponent