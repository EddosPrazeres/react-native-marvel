import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'
import CardHero from '../CardHero'
import { LoadingRequest, EmptyRequest } from '../../../components'

const ViewComponent = (props) => {
  return (
    <FlatList
      data={props.heroes}
      renderItem={({ item }) => <CardHero item={item} {...props}/> }
      keyExtractor = {(item, index) => index.toString ()}
      onEndReached={() => props.loadHeroes()}
      onEndReachedThreshold={0.3}
      ListHeaderComponent={() => <EmptyRequest loading={props.loading} count={props.heroes.length} message={props.messageEmpty}/>}
      ListFooterComponent={() => <LoadingRequest loading={props.loading}/> }
    />
  );
}

ViewComponent.defaultProps = {
  heroes: [],
  loading: false,
  loadHeroes: () => null,
  messageEmpty: "Oxi, parece que não tem heróis para serem exibidos."
}

ViewComponent.propTypes = {
  heroes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  loadHeroes: PropTypes.func.isRequired,
  messageEmpty: PropTypes.string
}

export default ViewComponent