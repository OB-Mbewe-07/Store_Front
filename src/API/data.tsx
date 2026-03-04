interface Props{
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
}

export const allProducts = fetch('https://fakestoreapi.com/products')
        .then(response => response.json()) as Promise<Props[]>;
    

