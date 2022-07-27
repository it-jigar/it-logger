import PropTypes from 'prop-types'
import LogContext from '../../contex/log/LogContex'
import Moment from 'react-moment'
import { useContext } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

function LogItem({ log }) {
  const { deleteLog, setCurrentLog } = useContext(LogContext)

  const deleteLogBtn = () => {
    deleteLog(log.id)
    M.toast({ html: 'Log deleted...' })
  }

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          onClick={() => setCurrentLog(log)}
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by{' '}
          <span className='black-text'>{log.tech}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:s a'>{log.date}</Moment>
        </span>
        <a href='#!' onClick={deleteLogBtn} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  )
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
}

export default LogItem
