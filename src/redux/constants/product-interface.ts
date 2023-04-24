export interface Product {
    id: number,
    title: string,
    price: number,
    category: string,
    image: string
}

export interface CartItem {
    id: number,
    quantity: number
}