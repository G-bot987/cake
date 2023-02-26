import * as fs from 'fs/promises';
import { ApiOrderInterface } from './interfaces/apiInterfaces/orderInterface';
import { salesByOrderInterface, salesDataInterface } from './interfaces/salesDataInterfaces';
const { config } = require('./config');


async function makeReq() {

    const result = await fetch(`${config.endPoint}`, {
        headers: {
            'X-Shopify-Access-Token': `${config.secretCake}`
        }
    })
    if (result.ok) {
        console.log('req successful')
        const jsonRes = await result.json()
        return await jsonRes
    } else {
        console.log('an error occured with the request ')
        return
    }

}

function calculateAverageBasketValue(orders: ApiOrderInterface[]) {

    const totalOrderVal: number = orders.reduce((acc: number, order: ApiOrderInterface) => acc += parseInt(order.current_total_price), 0)
    const averageBasketValue = parseFloat((totalOrderVal / orders.length).toFixed(2))
    return averageBasketValue
}

function removeNullSales(orders: ApiOrderInterface[]) {
    const products = orders.reduce((acc: salesByOrderInterface[], order: ApiOrderInterface) => {
        const { line_items } = order;
        const line_items_reduced = line_items
            // remove null
            .filter((line_item: { product_id: number; }) => line_item.product_id)
            // turn into required format
            .map((line_item: { product_id: number; quantity: number; price: string; }) => ({ product_id: line_item.product_id, quantity: line_item.quantity, price: Number(line_item.price) }));
        acc = [...acc, ...line_items_reduced];
        return acc;
    }, []);
    return products
}

function calculateTotalSalesPerProduct(products: salesByOrderInterface[]) {

    const quantityOfSales = products.reduce((acc: salesByOrderInterface[], product: salesByOrderInterface) => {
        const { product_id, quantity, price } = product;
        const index = acc.findIndex(p => p.product_id === product_id);
        // if does not exist, add product id
        if (index === -1) {
            acc.push({ product_id, quantity, price });
        }
        // if product id exists calculate new quantity
        else {
            acc[index].quantity += quantity;
        }
        return acc;
    }, []);
    return quantityOfSales
}

async function writeJsonFile(averageBasketValue: number, totalQuantitiesByProduct: salesByOrderInterface[]) {
    const salesData: salesDataInterface = {
        averageBasketValue,
        salesByProduct: totalQuantitiesByProduct
    }

    await fs.writeFile('./salesdata.json', JSON.stringify(salesData))

    console.log('Sales data: ', salesData, ' successfully written to salesdata.json.')

}


async function firstQuery() {

    // make req
    const reqResponse = await makeReq()

    const { orders } = reqResponse

    const averageBasketValue = calculateAverageBasketValue(orders)

    // Loops through every line_item and extracts out product id and quantity
    const products = removeNullSales(orders)

    // Remove duplicates and calculate the total quantity
    const totalQuantitiesByProduct = calculateTotalSalesPerProduct(products)

    writeJsonFile(averageBasketValue, totalQuantitiesByProduct)
};

firstQuery()