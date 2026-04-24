import { useCart } from "../../contexts/Cardcontext";
export default function Cart() {
    const { cart, removeFromCart, updateQty, grandTotal } = useCart();
    return (
        <>
            {
                cart.length === 0 ?
                    (<div className="alert alert-info text-center text-bold">No item in cart</div>) :
                    (
                        <>
                            {/* <h2 className="mb-3">Your Cart</h2> */}
                            <table className="table table-bordered align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Subtotal</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>


                                    {cart.map((itm) => (
                                        <tr key={itm.id}>
                                            <td>{itm.title}</td>
                                            <td>${itm.price}</td>
                                            <td style={{ "width": "100px" }}>
                                                <input
                                                    className="form-control text-center"
                                                    min="1"
                                                    type="number"
                                                    value={itm.qty}
                                                    onChange={(e) => updateQty(itm.id, Number(e.target.value))}
                                                />
                                            </td>
                                            <td>${itm.price * itm.qty}</td>
                                            <td>
                                                <button className="btn btn-outline-danger btn-sm" onClick={() => removeFromCart(itm.id)}>Remove</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="text-end fw-bold fs-5">Total: ${grandTotal}</div>
                        </>

                    )
            }
        </>
    )
}
