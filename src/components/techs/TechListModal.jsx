import { useContext, useEffect } from 'react'
import TechContext from '../../contex/tech/TechContex'
import TechItem from './TechItem'

function TechListModal() {
  const { techs, loading, getTechs } = useContext(TechContext)

  useEffect(() => {
    getTechs()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <div id='tech-list-modal' className='modal'>
        <div className='modal-contents'>
          <h4>Technician List</h4>
          <ul className='collection'>
            {!loading &&
              techs !== null &&
              techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TechListModal
