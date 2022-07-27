import { createContext, useReducer } from 'react'
import logReducer from './LogReducer'

const LogContext = createContext()

export const LogProvider = ({ children }) => {
  const initialState = {
    logs: [],
    loading: true,
  }

  const [state, dispatch] = useReducer(logReducer, initialState)

  // Get logs from db file
  const getLogs = async () => {
    const response = await fetch('/logs')
    const data = await response.json()

    dispatch({
      type: 'GET_LOGS',
      payload: data,
    })
  }

  // Add new log to a db file
  const addLog = async (newLog) => {
    const response = await fetch('/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newLog),
    })
    const data = await response.json()

    dispatch({
      type: 'ADD_LOG',
      payload: data,
    })
  }

  // Delete a log from db file
  const deleteLog = async (id) => {
    await fetch(`/logs/${id}`, {
      method: 'DELETE',
    })

    dispatch({
      type: 'DELETE_LOG',
      payload: id,
    })
  }

  // Set current log
  const setCurrentLog = (log) => {
    dispatch({
      type: 'SET_CURRENT',
      payload: log,
    })
  }

  const clearCurrentLog = () => {
    dispatch({
      type: 'CLEAR_CURRENT',
    })
  }

  // Update a log and save to db file
  const updateLog = async (updLog) => {
    const response = await fetch(`/logs/${updLog.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updLog),
    })
    const data = await response.json()

    dispatch({
      type: 'UPDATE_LOG',
      payload: data,
    })
  }

  // Search from System logs
  const searchLogs = async (text) => {
    const response = await fetch(`/logs?q=${text}`)
    const data = await response.json()

    dispatch({
      type: 'SEARCH_LOGS',
      payload: data,
    })
  }

  return (
    <LogContext.Provider
      value={{
        logs: state.logs,
        loading: state.loading,
        current: state.current,
        getLogs,
        addLog,
        deleteLog,
        updateLog,
        setCurrentLog,
        clearCurrentLog,
        searchLogs,
      }}
    >
      {children}
    </LogContext.Provider>
  )
}

export default LogContext
