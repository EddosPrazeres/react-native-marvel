import React from 'react'
import { Container, NameHeroX, NameHeroXRight, NameHeroXContent, NameHeroXLeft} from './styles'
import PropTypes from 'prop-types'
import { Touchable , ImageBG} from '../../../components'

const CardHero = (props) => {
  return (
    <Touchable onPress={()=> props.setHero(props.item)}>
      <Container>
        <ImageBG resizeMode="cover" source={`${props.item.thumbnail.path}.${props.item.thumbnail.extension}`}/>            
        <NameHeroX>
          <NameHeroXRight />
          <NameHeroXContent numberOfLines={2}>{props.item.name} </NameHeroXContent>
          <NameHeroXLeft />
        </NameHeroX>
      </Container>
    </Touchable>
  );
}

CardHero.propTypes = {
  item: PropTypes.object.isRequired
}

export default CardHero