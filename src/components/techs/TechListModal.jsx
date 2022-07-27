import { useEffect, useState } from 'react'
import TechItem from './TechItem'

function TechListModal() {
  const [techs, setTechs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getTechs()
  }, [])

  const getTechs = async () => {
    setLoading(true)
    const response = await fetch('/techs')
    const data = await response.json()

    setTechs(data)
    setLoading(false)
  }

  return (
    <div>
      <div id='tech-list-modal' className='modal'>
        <div className='modal-contents'>
          <h4>Technician List</h4>
          <ul className='collection'>
            {!loading &&
              techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TechListModal
