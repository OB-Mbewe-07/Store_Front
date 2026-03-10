import { use } from "react";
import { allProducts } from "../API/data";
import { Button, Card, Image, Text } from "@chakra-ui/react"
import truncateChars from "../Utils/string logic"; 
import {add , remove} from "../feature/cart/cartSlice"
import { useDispatch } from 'react-redux'; 

function GetProducts(){
    const products = use(allProducts);
    const dispatch = useDispatch();
    return(
        <section className="product_list">
            {products.map((product)=>(
                <Card.Root maxW="sm" overflow="hidden" className="card-container">
                    <div className="image-Wrapper">
                        <Image className="image_size"
                        src={product.image}
                        alt={product.description}
                        />
                    </div>
                    
                    <Card.Body gap="2">
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Description>
                            {truncateChars(product.description)}
                        </Card.Description>
                        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                            R{product.price}
                        </Text>
                    </Card.Body>
                    <Card.Footer gap="2">
                        <Button variant="solid" onClick={()=>dispatch(add(product))}>Add to cart</Button>
                        <Button variant="ghost" onClick={()=>dispatch(remove(product.id))}>Remove</Button>
                    </Card.Footer>
                </Card.Root>
            ))};
        </section>     
    )  
}

export default GetProducts;