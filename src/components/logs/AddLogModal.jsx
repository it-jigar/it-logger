import { useState, useContext } from 'react'
import TechSelectOptions from '../techs/TechSelectOptions'
import LogContext from '../../contex/log/LogContex'
import M from 'materialize-css/dist/js/materialize.min.js'

function AddLogModal() {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')

  const { addLog } = useContext(LogContext)

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech' })
    } else {
      const newLog = {
        message,
        tech,
        attention,
        date: new Date(),
      }
      addLog(newLog)
      M.toast({ html: `Log added by ${tech}` })
      setMessage('')
      setAttention(false)
      setTech('')
    }
  }

  return (
    <div id='add-log-modal' className='add-modal modal'>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='messsage'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>

      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  )
}

export default AddLogModal
