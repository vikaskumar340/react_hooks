import ProductCard from "./ProductCard";

export default function ProductList() {
    let itemList = [
        {id:1,title:'Laptop', price: 90},
        {id:2,title:'Keyboard', price: 40},
        {id:3,title:'Mounse', price: 20},
        {id:4,title:'Adapter', price: 10},
        {id:5,title:'Phone', price: 110},
    ];
    return (
        <div className="row">
            {itemList.map((item) => (
                <div className="col-md-3 mb-4" key={item.id}>
                    <ProductCard  product={item} /> 
                </div>
            )
                
            )}
        </div>
    )
}
