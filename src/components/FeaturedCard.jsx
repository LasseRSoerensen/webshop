import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';






function FeaturedCard(props) {

  const viewClick = () => {
    props.setId(props.product.id)
  }


    return (
        <div className=" bg-white rounded-md shadow-md flex flex-col items-center p-2 h-full">
            <img className=" sm:max-w-[100%] sm:h-44 h-44 " src={props.product.image}></img>
            <div title={props.product.title}>{props.product.title.slice(0, 30)}{props.product.title.length > 30 ? '...' : ''}</div>
            <div>{props.product.price}$</div>



            <div className="flex flex-col mt-10">
                <Stack spacing={2} direction="row">
                    <Button   variant="contained">Add to Basket</Button>
                    <Button variant="outlined" onClick={viewClick}>View</Button>
                </Stack>    

              
            </div>

        </div>);
}

export default FeaturedCard;

