type Product = {
    id:number,
    name: string,
    price: number
};

type productsListProps = {
    products: Product[]
};


export default function ProductsList ({products}:productsListProps) {
    if (products.length === 0) {
        return <p className="">No products available!</p>
    }
    return (
        <ul className="">
            {products.map((product)=> (
                <li className="" key={product.id}>
                    {product.name}  -$ {product.price}
                </li>
            ))}
        </ul>
    )
};