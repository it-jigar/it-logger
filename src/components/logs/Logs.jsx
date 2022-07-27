import { useContext, useEffect } from 'react'
import LogItem from './LogItem'
import PreLoder from '../layout/PreLoder'
import LogContext from '../../contex/log/LogContex'

function Logs() {
  const { logs, loading, getLogs } = useContext(LogContext)

  useEffect(() => {
    getLogs()
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <PreLoder />
  } else {
    return (
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className='center'>No logs to show...</p>
        ) : (
          logs.map((log) => <LogItem log={log} key={log.id} />)
        )}
      </ul>
    )
  }
}

export default Logs
