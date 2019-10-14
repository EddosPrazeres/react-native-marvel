import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from './styles'
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
      ListHeaderComponent={() => <EmptyRequest from="heroes" loading={props.loading} count={props.heroes.length} message={props.messageEmpty}/>}
      ListFooterComponent={() => <LoadingRequest loading={props.loading}/> }
    />
  );
}

ViewComponent.defaultProps = {
  heroes: [],
  loading: false,
  loadHeroes: () => null,
  messageEmpty: "Parece que todos os heróis foram eliminados ;)."
}

ViewComponent.propTypes = {
  heroes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  loadHeroes: PropTypes.func.isRequired,
  messageEmpty: PropTypes.string
}

export default ViewComponent