import { use, Suspense } from "react";

interface Props{
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
}

const allProducts = fetch('https://fakestoreapi.com/products')
    .then(response => response.json()) as Promise<Props[]>;

function GetProducts(){
    const products = use(allProducts);
    return(
        <Suspense fallback={<p>Products are loading</p>}>
            <ul>
                {products.map((product)=>(
                <li>{product.title}</li>
                ))};
            </ul>   
        </Suspense>
    )  
}

export default GetProducts;