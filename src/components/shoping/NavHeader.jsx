import { Link } from "react-router-dom";
import { useCart } from "../../contexts/Cardcontext";
function NavHeader() {
  const {cart} = useCart();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">🛒 MyShop</Link>
        <div>
          <Link className="nav-link d-inline me-3 text-white" to="/">Home</Link>
          <Link className="nav-link d-inline text-white" to="/cart">Cart ({cart.length}) | </Link>
          <Link className="nav-link d-inline text-white" to="/reducer-example">Reducer</Link> 
          <Link className="nav-link d-inline text-white" to="/memo-example">Memo | </Link>
          <Link className="nav-link d-inline text-white" to="/callback-example">Callback | </Link>
          <Link className="nav-link d-inline text-white" to="/layout-example">Layout | </Link>
          <Link className="nav-link d-inline text-white" to="/custom-hook-example">Custom Hook | </Link>
          <Link className="nav-link d-inline text-white" to="/hoc-example">HOC | </Link>
          <Link className="nav-link d-inline text-white" to="/lazy-example">Lazy Loading | </Link>

          

        </div>
      </div>
    </nav>
  );
}

export default NavHeader;