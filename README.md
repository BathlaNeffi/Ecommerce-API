# Ecommerce API
The E-commerce API is built using Node.js, Express.js, and MongoDB, providing functionality for the admin to manage their product inventory. The API allows for viewing the inventory, creating new products, deleting existing products, and updating the quantity of products.

Tech Stack:
- Node.js: A JavaScript runtime environment that allows running JavaScript on the server-side.
- Express.js: A web application framework for Node.js, used for handling server-side logic and creating RESTful APIs.
- MongoDB: A NoSQL database used for storing and retrieving product inventory data.

Functionality:
1. View Inventory: The API provides endpoints to retrieve the product inventory, allowing the admin to view all the products currently available.


2. Create Products: The API includes endpoints for creating new products in the inventory. The admin can provide details such as product name, description, price, and quantity.

3. Delete Product: The API provides an endpoint to delete a specific product from the inventory based on its unique identifier.

4. Update Quantity of Products: The API allows the admin to update the quantity of a product in the inventory. The admin can specify the product ID and the new quantity to update the stock.

## Setup

   After cloning, use "npm install" and serve the app using "node server". The example provided here are from Postman.

    http://127.0.0.1:8000/api/v1
![Installtion](https://github.com/BathlaNeffi/Ecommerce-API/assets/123646861/9eab690f-77d8-439c-b974-4f534c9a1d62)


   
## 1. View Inventory 

   Admin can view all the products available in inventory and sending a `GET` request.
   
    /products
![getItemsRequest](https://github.com/BathlaNeffi/Ecommerce-API/assets/123646861/c249fce0-e1ab-4b1a-9e3b-7174d1d356de)


   ### Response
![getIteamsResponse](https://github.com/BathlaNeffi/Ecommerce-API/assets/123646861/0239bbc5-2253-4603-ae59-3abbe933b9ff)

   


## 2. Create Products
   Admin can enter new products by specifying the name and quantity in form  and sending a `POST` request.

    /products/create
   
  ![requestToCreateItesm](https://github.com/BathlaNeffi/Ecommerce-API/assets/123646861/8451ec16-ff86-4570-a990-6dba5e0e589e)

    
   ## Response
   
![responseToCreateItesm](https://github.com/BathlaNeffi/Ecommerce-API/assets/123646861/48876d4f-c23f-4157-9b6b-18c40b8b5d59)

   
## 3. Delete Products
  
   Admin can delete products by passing the the product id and sending a `DELETE` request.
  
      /products/:id
    ![deleteItem](https://github.com/BathlaNeffi/Ecommerce-API/assets/123646861/e38399cf-a8f9-40d9-864a-737febccc47a)

   
   ### Response
   
  ![deleteItemRespose](https://github.com/BathlaNeffi/Ecommerce-API/assets/123646861/d68e3982-01f2-4798-9fb6-1462911f87c9)


## 4. Update Quantity of Products

   Admin can update  the quantity of a product by passing the product id and the quantity by which the product may be incremented or        decremented by and sending a `post` Request.
   
    /products/:id/update_quantity/?number=99
    
  ![updateItesmRequest](https://github.com/BathlaNeffi/Ecommerce-API/assets/123646861/145a01bb-972f-4695-b655-c10275dcefa4)

   
   ### Response
   
![updateItesmResponse](https://github.com/BathlaNeffi/Ecommerce-API/assets/123646861/aa27ac06-7379-428a-89f4-8385ba488c77)

   
   
   ## Folder Structure
   
```
Ecommerce-API
    |
    |                  |--->css
    |--->assets------->|--->img
    |                  |---> js
    |
    |--->config------->|--->mongoose.js
    |              
    |
    |                  
    |--->controllers-->|-->api-->|-->vi-->|-->productController.js
    |                  |-->homeController.js
    |
    |     
    |
    |--->models------->|-->products.js             
    |                  
    |--->routes------->|---->api------>|------>vi----->|-->product.js
    |                  |---->index.js                  |---->index.js
    |
    |
    |-->.gitignore
    |--> index.js
    |--> package-lock.json
    |-->package.json
    
 ````


# The api is live on 
http://44.201.174.199:8000/api/v1/products
