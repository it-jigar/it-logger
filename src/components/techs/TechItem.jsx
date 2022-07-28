import PropTypes from 'prop-types'
import { useContext } from 'react'
import TechContext from '../../contex/tech/TechContex'
import M from 'materialize-css/dist/js/materialize.min.js'

function TechItem({ tech }) {
  const { deleteTech } = useContext(TechContext)

  const deleteTechBtn = () => {
    deleteTech(tech.id)
    M.toast({ html: 'Technician deleted...' })
  }

  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a href='#!' className='secondary-content' onClick={deleteTechBtn}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  )
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
}

export default TechItem
