
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
            <div className=" border-2 border-red-600 flex flex-col items-center">
                <div>FEATURED PRODUCTS TITLE</div>
                <div className="grid border-2 border-blue-500 sm:max-w-[90%]">
        
                    {Products.map((product) => {
                        return <FeaturedCard key={product.id} product={product} />;
                    })}
        
                </div>

            </div>);
    }
}

export default FeaturedProducts;