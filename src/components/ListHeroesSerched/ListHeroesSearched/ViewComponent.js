import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from './styles'
import { LoadingRequest, EmptyRequest } from '../../../components'
import CardHeroSearched from '../CardHeroSearched'

const ViewComponent = (props) => {
  return (
    <FlatList
      data={props.searchHeroes}
      renderItem={({ item }) => <CardHeroSearched item={item} {...props}/>}
      keyExtractor = {(item, index) => index.toString ()}
      ListHeaderComponent={() => <LoadingRequest loading={props.loadingSearch}/> }
      ListFooterComponent={() => <EmptyRequest 
        searchHeroesLoaded={props.searchHeroesLoaded}
        from="searched" 
        loading={props.loadingSearch} 
        count={props.searchHeroes.length} 
        message={props.messageEmpty}/>}        
    />
  );
}

ViewComponent.defaultProps = {
  searchHeroes: [],
  loadingSearch: false,
  searchHeroesLoaded: false,
  messageEmpty: "Será que ainda existem heróis para serem encontrados?"
}

ViewComponent.propTypes = {
  searchHeroes: PropTypes.array.isRequired,
  loadingSearch: PropTypes.bool.isRequired,
  searchHeroesLoaded: PropTypes.bool
}

export default ViewComponent