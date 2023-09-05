
import { useEffect, useState } from "react";
import FeaturedCard from './FeaturedCard.jsx'
import { motion, AnimatePresence } from "framer-motion"
import ProductPage from "./ProductPage.jsx";
function FeaturedProducts() {
    const [Products, setProducts] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [selectedId, setSelectedId] = useState(null);
        
    useEffect(() => {
        fetch('https://fakestoreapi.com/products', { mode: "cors" })
        .then((response) => response.json())
        .then((response) => setProducts(response))
        .then((response) => setisLoading(false))
        .catch((error) => console.error(error));
    }, []);



    if (isLoading == false) {

        return (
            <div className="bg-[#023047] flex flex-col items-center">
                <div>All Products</div>
                <div className="flex flex-wrap justify-evenly">
                    {Products.map((product) => {
                        return <motion.div whileHover={{ scale: 1.1 }} layoutId={product.id} className=" m-2 mt-4 w-[90%] sm:max-w-[15%] sm:min-w-[300px] "><FeaturedCard key={product.id} product={product} setId={setSelectedId}/></motion.div>;
                    })}
                    <AnimatePresence>
                        {selectedId && (
                            <motion.div
                                layoutId={selectedId}

                                className=" shadow-2xl bg-white   p-2 fixed top-[10%] lg:w-[60%] min-h-[40%] "
                                style={{
  
                        
                                    zIndex: 1000, // Ensure the overlay is above other content
                                }}
                            >
                                <ProductPage product={Products.find(product => product.id === selectedId)} setId={setSelectedId}/>
                            </motion.div>
                        )}
                    </AnimatePresence>
        
                </div>
                

            </div>);
    }
}

export default FeaturedProducts;