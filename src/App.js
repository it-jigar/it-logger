import React, { useEffect } from 'react'
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/techs/AddTechModal'
import TechListModal from './components/techs/TechListModal'
import { LogProvider } from './contex/log/LogContex'
import { TechProvider } from './contex/tech/TechContex'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

function App() {
  useEffect(() => {
    // Init materialize JS
    M.AutoInit()
  })
  return (
    <LogProvider>
      <TechProvider>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </TechProvider>
    </LogProvider>
  )
}

export default App
