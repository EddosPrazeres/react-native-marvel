import React from 'react'
import { Container, ImageBG, ImageBGOverlay, NameHeroX, NameHeroXRight, NameHeroXContent, NameHeroXLeft} from './styles'
import PropTypes from 'prop-types'
const CardHero = (props) => {
  return (
    <Container>
      <ImageBG resizeMode="cover" source={{uri: `${props.item.thumbnail.path}.${props.item.thumbnail.extension}`}}> 
        <ImageBGOverlay/>
      </ImageBG>
          
      <NameHeroX>
        <NameHeroXRight />
        <NameHeroXContent numberOfLines={2}>{props.item.name} </NameHeroXContent>
        <NameHeroXLeft />
      </NameHeroX>

    </Container>
  );
}

CardHero.propTypes = {
  item: PropTypes.object.isRequired
}

export default CardHero