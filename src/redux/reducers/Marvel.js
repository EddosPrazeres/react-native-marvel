import api from '../../config/api'

export const Types = {
  GET_HEROES: 'Marvel/GET_HEROES'
}

export const Creators = {
  getHeroes: (offset = 0) => {
    const response = api.get(`/v1/public/characters?orderBy=name&limit=20&offset=${offset}`) 
    return {
      type: Types.GET_HEROES,
      payload: response,
    }
  }
}

const INITIAL_STATE = {
  heroes: []
}

export default function Marvel(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_HEROES: 
      return {
        ...state,
        heroes: [...state.heroes, ...action.payload.data.data.results]
      }
    default:
      return state
      break
  }
}