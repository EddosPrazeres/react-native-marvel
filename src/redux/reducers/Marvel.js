import api from '../../config/api'

export const Types = {
  GET_HEROES: 'Marvel/GET_HEROES',
  SET_FEEDBACKS_SEARCH: 'Marvel/SET_FEEDBACKS_SEARCH',
  UPDATE_SEARCH_QUERY: 'Marvel/UPDATE_SEARCH_QUERY',
  CLEAR_SEARCH_QUERY: 'Marvel/CLEAR_SEARCH_QUERY',
  SELECT_HERO:'Marvel/SELECT_HERO'
}

export const Creators = {
  getHeroes: (offset = 0) => {
    const response = api.get(`/v1/public/characters?orderBy=name&limit=20&offset=${offset}`) 
    return {
      type: Types.GET_HEROES,
      payload: response,
    }
  },
  setFeedbacksSearch: (loadingSearch) => {
    return {
      type: Types.SET_FEEDBACKS_SEARCH,
      payload: {
        loadingSearch
      },
    }
  },
  updateSearchQuery: (query, offset = 0) => {
    const response = api.get(`/v1/public/characters?orderBy=name&&limit=100&nameStartsWith=${query}&offset=${offset}`) 
    return {
      type: Types.UPDATE_SEARCH_QUERY,
      payload: response
    }
  },
  clearSearchQuery: () => {
    return {
      type: Types.CLEAR_SEARCH_QUERY,
      payload: [],
    }
  },
  selectHero: (hero) => {
    return {
      type: Types.SELECT_HERO,
      payload: hero
    }
  }
}

const INITIAL_STATE = {
  heroes: [],
  searchHeroes: [],
  searchHeroesLoaded: false,
  messageSearch: '',
  querySearch: false,
  loadingSearch: false,
  hero: undefined,
}

export default function Marvel(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_HEROES: 
      return {
        ...state,
        heroes: [...state.heroes, ...action.payload.data.data.results]
      }

    case Types.SET_FEEDBACKS_SEARCH: 
      return {
        ...state,
        loadingSearch: action.payload.loadingSearch
      }

    case Types.UPDATE_SEARCH_QUERY: 
      return {
        ...state,
        searchHeroes: action.payload.data.data.results,
        searchHeroesLoaded: true,
      }

    case Types.CLEAR_SEARCH_QUERY: 
      return {
        ...state,
        searchHeroes: action.payload,
        searchHeroesLoaded: false,
      }

    case Types.SELECT_HERO: 
      return {
        ...state,
        hero: action.payload,
      }
    default:
      return state
      break
  }
}