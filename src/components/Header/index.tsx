import { useNavigate } from 'react-router-dom'
import Button from '../Button'

import './index.css'

const Header = () => {
  const navigate = useNavigate()

  const handleGoTo = () => {
    navigate(`/`, { replace: true })
  }
  return (
    <header className='header-container bg-white'>
      <div className='page-description'>
        <h3 className='brand' onClick={handleGoTo}>
          🥕 FOOD<span className='text-green'>AWAA</span>
        </h3>

        <h4>🏠 Catalogues des Produits</h4>
      </div>
      <Button icon='plus'> Ajouter un produit</Button>
    </header>
  )
}

export default Header
