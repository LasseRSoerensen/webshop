
import { useEffect, useState } from "react";
import FeaturedCard from './FeaturedCard.jsx'
import { motion, AnimatePresence } from "framer-motion"
import { Button, Stack } from "@mui/material";
function ProductPage(props) {
    const viewClick = () => {
        props.setId(null)
      }

    
    return (
        <div className="w-full h-full">
            <div className="md:flex  h-full   gap-[10%]">
                <div className=" flex justify-center md:w-[40%] w-[100%]    ">
                   { <img className="  self-center max-h-[60%] md:max-w-[100%] max-w-[40%]  "  src={props.product.image}></img>}
                </div>
                <div className="md:w-[50%] flex flex-col gap-10">
                    <div className="flex">
                        <div>
                            <h1 className=" font-bold">{props.product.title}</h1>
                            <div className=" italic">{props.product.category}</div>
                        </div>
                    </div>
                    <div className="flex grow flex-col">
                        <div className=" text-4xl pb-4">{props.product.price} $</div>
                        <div className="text-xl font-semibold">Description</div>
                        <div className="p-2 ">{props.product.description}</div>
                    </div>
                    <div className="flex self-center ">
                        <Stack spacing={15} direction="row">
                            <Button className="   " variant="contained">Add to Basket</Button>
                            <Button className=" " variant="contained" onClick={viewClick}>Go Back</Button>
                        </Stack>

                    </div>
                </div>
            </div>

          
    
        </div>);
}


export default ProductPage;