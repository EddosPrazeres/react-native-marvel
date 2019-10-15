import api from '../../config/api'

export const Types = {
  GET_HERO_DETAILS: 'Marvel/GET_HERO_DETAILS',
  CLEAR_HERO_DETAILS: 'Marvel/CLEAR_HERO_DETAILS',
}

export const Creators = {
  getHeroDetails: (typeDetails, idHero) => {
    let data;
    const response = api.get(`v1/public/characters/${idHero}/${typeDetails}?limit=100&offset=0`).then((request) => {
      return {
        typeDetails,
        request
      }
    })
    return {
      type: Types.GET_HERO_DETAILS,
      payload: response
    }
  },
  clearHeroDetails: (clear=[]) => {   
    return {
      type: Types.CLEAR_HERO_DETAILS,
      payload: clear
    }
  },
}

const INITIAL_STATE = {
  comics: [],
  series: [],
  stories: [],
  events: [],
}

export default function MarvelDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_HERO_DETAILS: 
      let detailsKey = action.payload.typeDetails;
      let valueKey = action.payload.request.data.data.results
      let copyState = state;
      copyState[detailsKey] = valueKey
      return {
        ...state,
        copyState
      }

    case Types.CLEAR_HERO_DETAILS: 
      return {
        ...state,
        comics: action.payload.clear,
        series: action.payload.clear,
        stories: action.payload.clear,
        events: action.payload.clear,
      }

    default:
      return state
      break
  }
}