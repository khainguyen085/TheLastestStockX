import React from "react";
import {Link} from 'react-router-dom'
function StickyFooter({products,}) {
    console.log()

    return (
        <div className="footer">
            <marquee behavior="left">
                {products.map((product)=> (
                    <Link to={`/product/${product._id}`} style={{textDecoration: "none"}}>
                    <span style={{paddingLeft:"40px",color:"white"}}>{product.name}</span> <span style={{color:"teal"}}>${product.price}</span>                   
                     </Link>
                ))}
            </marquee>
        </div>
    )
}

export default StickyFooter;