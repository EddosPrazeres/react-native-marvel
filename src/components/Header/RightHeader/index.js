import React from 'react'
import { Container } from './styles'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../../styles'
import { withNavigation } from 'react-navigation';
import { Touchable } from '../../../components'
const RightHeader = ({name, size, navigation}) => {
  return (
    <Container>
      <Touchable onPress={() => navigation.navigate('SearchScreen')}>
        <Icon name={name} size={size} color={colors.primary} style={{margin: 4}}/>
      </Touchable>
    </Container>
  );
}

RightHeader.defaultProps = {
  name: "search",
  size: 18,
}

RightHeader.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number
}

export default withNavigation(RightHeader)