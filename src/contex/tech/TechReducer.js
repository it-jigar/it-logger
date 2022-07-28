const techReducer = (state, action) => {
  switch (action.type) {
    case 'GET_TECHS':
      return {
        ...state,
        techs: action.payload,
        loading: false,
      }

    case 'ADD_TECH':
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      }

    case 'DELETE_TECH':
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
        loading: false,
      }

    default:
      return state
  }
}

export default techReducer
