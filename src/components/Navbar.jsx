import {Link} from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Cadastro de Produtos</h1>
        <nav>
          <ul>
              <li>
                  <Link to="/">Products</Link>
              </li>
              <li>
                  <Link to="/products/new">New Product</Link>
              </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar