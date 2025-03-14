import { useEffect, useState } from "react";

export default function CardProduct() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [])

    return (

        <>
            {product.map(item => (
                <>
                    <div className="p-2 flex flex-col justify-center items-center ">
                        <div className=" w-80 h-48  border rounded-2xl flex">
                            <img className="w-40 bg-contain p-2 h-40 " src={item.image} alt="" />
                            <div className="p-2 flex flex-col items-center justify-center">
                                <h3 className="line-clamp-1">{item.title}</h3>
                                <p className="text-center">price: ${item.price}</p>
                            </div>
                        </div>

                    </div>
                </>
            )
            )}
        </>
    )
}