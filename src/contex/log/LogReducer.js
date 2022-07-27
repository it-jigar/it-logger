const logReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LOGS':
      return {
        ...state,
        logs: action.payload,
        loading: false,
      }

    case 'ADD_LOG':
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      }

    case 'DELETE_LOG':
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      }

    case 'UPDATE_LOG':
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
      }

    case 'SET_CURRENT':
      return {
        ...state,
        current: action.payload,
      }

    case 'CLEAR_CURRENT':
      return {
        ...state,
        current: action.payload,
      }

    default:
      return state
  }
}

export default logReducer
