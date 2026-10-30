export default function  Dashboard({product, handleBuy}:any) {

    return (
        <div className="">
            <h2 className="">{product.name}</h2>
            <p className="">{product.price}</p>
            <button className="" onClick={handleBuy}>Buy</button>
        </div>
    )
}