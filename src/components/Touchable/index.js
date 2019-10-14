import React from 'react'
import { TouchableHighlight} from './styles'
import PropTypes from 'prop-types'
import { colors } from '../../styles'

const Touchable = ({children, onPress}) => {
  return (
    <TouchableHighlight
      underlayColor={colors.transparent}
      onPress={() => onPress()} >
      { children }
    </TouchableHighlight>
  );
}

Touchable.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
}

export default Touchable