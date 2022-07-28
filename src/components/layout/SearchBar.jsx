import { useContext, useState } from 'react'
import LogContext from '../../contex/log/LogContex'

function SearchBar() {
  const [text, setText] = useState('')

  const { searchLogs, getLogs } = useContext(LogContext)

  const handleSearchLogs = (e) => {
    setText(e.target.value)
    searchLogs(e.target.value)
  }

  const handleClose = () => {
    setText('')
    getLogs()
  }

  return (
    <nav className='blue navigation-bar'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search Logs...'
              value={text}
              onChange={handleSearchLogs}
            />
            <label className='label-icon' htmlFor='serarch'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons' onClick={handleClose}>
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  )
}

export default SearchBar
