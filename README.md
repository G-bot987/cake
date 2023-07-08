# Cake Digital Developer Tec Test

## Steps to run locally
-  npm install, and check for ts version  https://code.visualstudio.com/docs/typescript/typescript-compiling
-  give your key & API endpoint to '.env' do not commit this use git ignore principles.


## Running scriptss
complie with tsc, 
e.g. tsc script1.ts
then run with compiled js file e.g. node script1.js

# Script 1

- [x] calculate the total avg, of order value for all orders in store
- [x] Calculates the total number of sales per product in the store
- [x] Stores the above data in a JSON file in the codes directory
- [x] 'line_item' has a 'product_id' that is null, sales are ignored. 

# Script 2 

- [x] create/update total_sales metafield on each product found in 'salesdata.json'
- [x]  updates metafield with total sales, quanity sold * unit price
- [x]  uses Admin GraphQL metafieldSet mutation

## Demo 

[DemoVideo](https://drive.google.com/file/d/15txAIc4Z2BPdBKAf3sJxDxTj62HhlTK2/view "https://drive.google.com/file/d/15txAIc4Z2BPdBKAf3sJxDxTj62HhlTK2/view")