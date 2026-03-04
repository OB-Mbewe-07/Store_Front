export interface Props{
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
}

export interface cartProducts{
    product: Props;
    quantity: number;
}

/*
    Array of all products inside of the cart, the idea is that i want to have all elements that are 
    in the cart with the quantity included inside of it
*/

export interface stateOfCartItems{
    products: cartProducts[]; 
}
 
export type reducerActions = 
{type: "add"; payload: Props} | 
{type: "remove"; payload: number} | 
{type: "increaseQuantity"; payload: number} | 
{type: "decreaseQuantity"; payload: number} | 
{type: "clear"} ;
