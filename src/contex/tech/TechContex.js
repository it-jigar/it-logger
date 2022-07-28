import { createContext, useReducer } from 'react'
import techReducer from './TechReducer'

const TechContext = createContext()

export const TechProvider = ({ children }) => {
  const initialState = {
    techs: [],
    loading: true,
  }

  const [state, dispatch] = useReducer(techReducer, initialState)

  // Get techs from db
  const getTechs = async () => {
    const response = await fetch('/techs')
    const data = await response.json()
    dispatch({
      type: 'GET_TECHS',
      payload: data,
    })
  }

  // Add new technician to a db
  const addTech = async (newTech) => {
    const response = await fetch('/techs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTech),
    })
    const data = await response.json()

    dispatch({
      type: 'ADD_TECH',
      payload: data,
    })
  }

  // Delete technician from db
  const deleteTech = async (id) => {
    await fetch(`/techs/${id}`, {
      method: 'DELETE',
    })

    dispatch({
      type: 'DELETE_TECH',
      payload: id,
    })
  }

  return (
    <TechContext.Provider
      value={{
        ...state,
        getTechs,
        addTech,
        deleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  )
}

export default TechContext
