import React from 'react'
import { Container, TextInput, Text, TouchableHighlight} from './styles'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation';
import { Touchable } from '../../../components'

const ViewComponent = ({navigation, setFeedbacks, queryUpdate, querySearch}) => {
  return (
    <Container>
      <TextInput
        autoFocus={true}
        onChangeText={text => queryUpdate(text)}
        value={querySearch}
        placeholder={"Tente encontrar um herói"}
      />

      <Touchable onPress={() => setFeedbacks(true)}>
        <Text>Cancelar</Text>
      </Touchable>
    </Container>
  );
}

ViewComponent.defaultProps = {

}

ViewComponent.propTypes = {

}

export default withNavigation(ViewComponent)