import React from 'react'
import { Container, TouchableHighlight } from './styles'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../../styles'
import { Button } from "react-native"
import { withNavigation } from 'react-navigation';
const RightHeader = ({name, size, navigation}) => {
  console.log("DADO DAOD", navigation)
  return (
    <Container>
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => navigation.navigate('SearchScreen')}>
       <Icon name={name} size={size} color={colors.primary} />
      </TouchableHighlight>
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