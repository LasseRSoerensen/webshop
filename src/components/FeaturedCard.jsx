
import { useEffect, useState } from "react";
function FeaturedCard(props) {


    return (
        <div className=" border-2 border-red-600 flex flex-col items-center">
            <img src={props.product.image}></img>
            <div>{props.product.title}</div>
            <div>{props.product.price}</div>
            <button>ADD TO CART</button>
            <button>MORE BUTTON</button>

        </div>);
}

export default FeaturedCard;