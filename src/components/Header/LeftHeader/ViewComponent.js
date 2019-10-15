import React from 'react'
import { Container } from './styles'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../../styles'
import { withNavigation } from 'react-navigation';
import { Touchable } from '../..'

const ViewComponent = ({name, size, onPress}) => {
  return (
    <Container>
      <Touchable onPress={() => onPress()}>
        <Icon name={name} size={size} color={colors.primary} style={{margin: 4}}/>
      </Touchable>
    </Container>
  );
}

ViewComponent.defaultProps = {
  name: "search",
  size: 18,
}

ViewComponent.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number
}

export default withNavigation(ViewComponent)