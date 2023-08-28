
import { useEffect, useState } from "react";
import FeaturedCard from './FeaturedCard.jsx'
function FeaturedProducts() {
    const [Products, setProducts] = useState(null);
    const [isLoading, setisLoading] = useState(true);
        
    useEffect(() => {
        fetch('https://fakestoreapi.com/products', { mode: "cors" })
        .then((response) => response.json())
        .then((response) => setProducts(response))
        .then((response) => setisLoading(false))
        .catch((error) => console.error(error));
    }, []);



    if (isLoading == false) {

        return (
            <div className="bg-[#83d473] border-2 border-red-600 flex flex-col items-center">
                <div>All Products</div>
                <div className="flex flex-wrap justify-evenly">
                    {Products.map((product) => {
                        return <div className="border-2 m-2 mt-4 sm:max-w-[15%] sm:min-w-[300px] shadow-2xl"><FeaturedCard key={product.id} product={product} /></div>;
                    })}
        
                </div>
                

            </div>);
    }
}

export default FeaturedProducts;