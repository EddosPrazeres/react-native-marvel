import React from 'react'
import { Container, TextView} from './styles'
import PropTypes from 'prop-types'
import ContentScrollHeroDetails from '../ContentScrollHeroDetails'
import { ImageBG } from '../../../components'
const ViewComponent = ({hero}) => {
  return (
    <Container>
      <ImageBG resizeMode="cover" source={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} height={400} marginBottom={8}/>
      <ContentScrollHeroDetails />
    </Container>
  );
}

ViewComponent.propTypes = {
  hero: PropTypes.object.isRequired,
}

export default ViewComponent