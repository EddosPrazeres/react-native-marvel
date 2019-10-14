import React from 'react'
import { Container, ImageBG, ImageBGOverlay, Name} from './styles'
import PropTypes from 'prop-types'
import { Touchable } from '../../../components'
const CadHeroSearched = (props) => {
  return (
    <Touchable onPress={()=> null}>
      <Container>
        <ImageBG resizeMode="cover" source={{uri: `${props.item.thumbnail.path}.${props.item.thumbnail.extension}`}}> 
          <ImageBGOverlay/>
        </ImageBG>        
        <Name> {props.item.name} </Name>
      </Container>
    </Touchable>
  );
}

CadHeroSearched.propTypes = {
  item: PropTypes.object.isRequired
}

export default CadHeroSearched