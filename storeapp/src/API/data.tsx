//https://medium.com/@wolfflucas/the-definitive-guide-to-make-api-calls-in-react-4c4da98f4d1c
import { useEffect, useState } from "react";

function GetProducts(){
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())            
        .then(json=>setProduct(json))
        .then(json=> console.log(json));
    },[]);
    
    return(
        <div>
            <ul>
                {product.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
       
    )
}

export default GetProducts;