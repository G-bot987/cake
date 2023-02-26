export interface salesByOrderInterface {
    product_id: number;
    quantity: number;
    price: number;
}

export interface salesDataInterface {
    averageBasketValue: number;
    salesByProduct: salesByOrderInterface[]
}