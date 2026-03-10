import { createSlice , type PayloadAction} from '@reduxjs/toolkit'
import { type Props, type stateOfCartItems } from '../../store/types'

const initialState: stateOfCartItems={
    products :[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state , action: PayloadAction<Props>) =>{
        const exists = state.products.find(
            prod => prod.product.id === action.payload.id
        );

        if (exists) {
            exists.quantity += 1;
        } else {
            state.products.push({ product: action.payload, quantity: 1 });
        }
    },
    remove: (state , action: PayloadAction<number>) =>{
        state.products = state.products.filter(prod => prod.product.id !== action.payload);
        console.log("removed");
    },
    increaseQuantity: (state , action: PayloadAction<number>) =>{
        const item = state.products.find(prod => prod.product.id === action.payload);

        if (item){
            item.quantity += 1;
        }
    },
    decreaseQuantity: (state , action: PayloadAction<number>) =>{
        const item = state.products.find(prod => prod.product.id === action.payload);

        if (item){
            item.quantity -= 1;
        }
    },
    clear: (state) =>{
        state.products = [];
    }
  }
})

// Action creators are generated for each case reducer function
export const { add, remove, increaseQuantity, decreaseQuantity, clear } = cartSlice.actions
export default cartSlice.reducer