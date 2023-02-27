import { request, gql } from 'graphql-request';
import { config } from './config';
import { salesByOrderInterface, total_salesInterface } from './interfaces/salesDataInterfaces';
const salesData = require('./salesdata.json');

const products = salesData.salesByProduct.map((sale: salesByOrderInterface) => ({
    id: sale.product_id,
    totalSales: sale.quantity * sale.price,
}));

const updateProductMetafields = async (products: total_salesInterface[]) => {
    const endpoint = `${config.endPoint2}`;
    const headers = {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': `${config.secretCake}`,
    };

    const mutation = gql`
      mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
        metafieldsSet(metafields: $metafields) {
          metafields {
            key
            namespace
            value
            type
          }
          userErrors {
            field
            message
            code
          }
        }
      }
    `;

    const variables = {
        metafields: products.map((product: total_salesInterface) => ({
            key: 'total_sales',
            namespace: 'total_sales',
            ownerId: `gid://shopify/Product/${product.id}`,
            value: product.totalSales.toString(),
            type: 'single_line_text_field',
        })),
    };

    try {
        const data = await request(endpoint, mutation, variables, headers);
        if (data) {
            products.forEach((product: total_salesInterface) => { console.log(`Metafields updated for product with ID ${product.id}`) })
        }
    } catch (error: any) {
        console.log('an error occured with your request ', error.response.errors)
    }
};

updateProductMetafields(products);
