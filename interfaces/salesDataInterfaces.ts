export interface salesByOrderInterface {
    product_id: number;
    quantity: number;
    price: number;
}

export interface salesDataInterface {
    averageBasketValue: number;
    salesByProduct: salesByOrderInterface[]
}

export interface total_salesInterface {
    id: number;
    totalSales: number;
}