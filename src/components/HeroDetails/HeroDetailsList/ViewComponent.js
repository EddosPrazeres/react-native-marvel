import React from 'react'
import { Container, Title, FlatList} from './styles'
import PropTypes from 'prop-types'
import  CardHeroDetails  from '../CardHeroDetails'
const ViewComponent = ({list, name, initial, getItemLayout}) => {
  if (list.length == 0) return null
  return (
    <Container>
      <Title>{name}</Title>
      <FlatList
        // getItemLayout={getItemLayout}
        // initialScrollIndex={initial}
        data={list}
        horizontal={true}
        renderItem={({ item }) => <CardHeroDetails item={item} />}
        keyExtractor = {(item, index) => index.toString ()}
      />
    </Container>
  )
}

ViewComponent.defaultProps = {
  list: [],
  name: "",
  initial: 0,
  getItemLayout: () => null,
}

ViewComponent.propTypes = {
  list: PropTypes.array,
  name: PropTypes.string,
  initial: PropTypes.number,
  getItemLayout: PropTypes.func,
}

export default ViewComponent