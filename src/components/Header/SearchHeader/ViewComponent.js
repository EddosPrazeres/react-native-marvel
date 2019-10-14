import React from 'react'
import { Container, TextInput, Text, TouchableHighlight} from './styles'
import PropTypes from 'prop-types'
import { Touchable } from '../../../components'

const ViewComponent = ({onPress, queryUpdate, querySearch}) => {
  return (
    <Container>
      <TextInput
        autoFocus={true}
        onChangeText={text => queryUpdate(text)}
        value={querySearch}
        placeholder={"Tente encontrar um herói"}
      />

      <Touchable onPress={() => onPress()}>
        <Text>Cancelar</Text>
      </Touchable>
    </Container>
  );
}

ViewComponent.defaultProps = {

}

ViewComponent.propTypes = {

}

export default ViewComponent