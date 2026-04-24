import { useCart } from "../../contexts/Cardcontext";
export default function ProductCard({product}) {

    const {addToCart} = useCart();

    return (
        
            <div className="card shadow-sm h-100 text-center">
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                    <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            </div>
        
    )
}
