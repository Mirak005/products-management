import { Link, useNavigate } from 'react-router-dom'
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

      <Link to='/' className='add-product-link btn bg-green text-white'>
        <span className='text-white'>&#43;</span>
        Ajouter un produit
      </Link>
    </header>
  )
}

export default Header
