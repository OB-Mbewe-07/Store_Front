import type {stateOfCartItems, reducerActions} from '../store/types'

export const initialState: stateOfCartItems ={
    products:[]
}

export default function cartReducer(state: stateOfCartItems, action:reducerActions): stateOfCartItems{
    switch(action.type){
        case "add":{
            const containsValue = state.products.find(prod => prod.product.id === action.payload.id)
            if (containsValue){
                return{
                    ...state,
                    products: state.products.map(product =>
                        product.product.id === action.payload.id ? {...product , quantity: product.quantity + 1} : product
                    )
                }
            };
            /*Im thinking this bottom part must be a button  that adds a new product, its not being implemented yet though*/
            return {
                ...state,
                products: [...state.products, {product: action.payload, quantity: 1}]
            }
        }  
        case "clear":{
            return initialState;
        }
        case "decreaseQuantity":{
            return{
                ...state,
                products: state.products.map( prod =>
                    prod.product.id === action.payload ? {...prod, quantity: prod.quantity - 1} : prod
                )
            }
        }
        case "increaseQuantity":{
            return {
                ...state,
                products: state.products.map( prod =>
                    prod.product.id === action.payload ? {...prod, quantity: prod.quantity + 1} : prod
                )
            };
        }   
        case "remove":{
            return{
                ...state,
                products: state.products.filter( prod => prod.product.id !== action.payload)
            }
        }
        default:{
            return state;
        }
            
    }
}