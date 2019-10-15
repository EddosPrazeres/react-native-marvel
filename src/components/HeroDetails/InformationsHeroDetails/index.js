import React from 'react'
import { Container, Title, Description} from './styles'
import PropTypes from 'prop-types'

const InformationsHeroDetails = ({title, value}) => (
  <Container>
    <Title>{title}</Title> 
    <Description>{value}</Description> 
  </Container>
)

InformationsHeroDetails.defaultProps = {
  title: '',
  value: '',
}

InformationsHeroDetails.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
}

export default InformationsHeroDetails