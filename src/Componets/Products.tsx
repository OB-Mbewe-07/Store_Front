import { use, Suspense } from "react";
import { allProducts } from "../API/data";
import { Button, Card, Image, Text } from "@chakra-ui/react"

function GetProducts(){
    const products = use(allProducts);
    return(
        <Suspense fallback={<p>Products are loading</p>} >
            <section className="product_list">
                {products.map((product)=>(
                    <Card.Root maxW="sm" overflow="hidden">
                        <Image className="image_size"
                            src={product.image}
                            alt={product.description}
                        />
                        <Card.Body gap="2">
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Description>
                                {product.description}
                            </Card.Description>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                            R{product.price}
                            </Text>
                        </Card.Body>
                        <Card.Footer gap="2">
                            <Button variant="solid">Add to cart</Button>
                            <Button variant="ghost">Remove</Button>
                        </Card.Footer>
                    </Card.Root>
                ))};
            </section>
              
        </Suspense>
    )  
}

export default GetProducts;