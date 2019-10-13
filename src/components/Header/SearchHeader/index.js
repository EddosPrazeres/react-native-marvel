import React from 'react'
import { Container, TextInput, Text, TouchableHighlight} from './styles'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation';

const SearchHeader = ({navigation}) => {
  return (
    <Container>
      <TextInput
        // onChangeText={text => onChangeText(text)}
        // value={value}
        placeholder={"Encontre um herói"}
      />

      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => navigation.goBack()}>
        <Text>Cancelar</Text>
      </TouchableHighlight>
    </Container>
  );
}

SearchHeader.defaultProps = {

}

SearchHeader.propTypes = {

}

export default withNavigation(SearchHeader)