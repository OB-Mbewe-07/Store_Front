import type {Props} from '../store/types'

export const allProducts = fetch('https://fakestoreapi.com/products')
        .then(response => response.json()) as Promise<Props[]>;
    

