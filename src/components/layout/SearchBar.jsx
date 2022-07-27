import { useContext } from 'react'
import LogContext from '../../contex/log/LogContex'

function SearchBar() {
  const { searchLogs } = useContext(LogContext)

  const logSearchFun = (e) => {
    console.log(e.target.value)
    searchLogs(e.target.value)
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
              onChange={logSearchFun}
            />
            <label className='label-icon' htmlFor='serarch'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}

export default SearchBar
