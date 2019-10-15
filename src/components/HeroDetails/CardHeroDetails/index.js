import React from 'react'
import { Container, Title} from './styles'
import PropTypes from 'prop-types'
import { ImageBG } from '../../../components'

const DefaultCard = ({item}) => {
  return <ImageBG 
    resizeMode="cover" 
    source={`${item.thumbnail.path}.${item.thumbnail.extension}`} 
    height={125} 
    width={100} 
    marginRight={2}
  />
}

const OnlyTextCard = ({item}) => {
  return <Title> {item.title} </Title>
}
const CardHeroDetails = ({item}) => (
  <Container>
    {item.thumbnail ? <DefaultCard item={item} /> : <OnlyTextCard item={item}/>}
  </Container>
)

CardHeroDetails.propTypes = {
  item: PropTypes.object.isRequired,
}

export default CardHeroDetails