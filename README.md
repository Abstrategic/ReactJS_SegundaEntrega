# Abstrategic Ecommerce
## Project React JS

This project deals with the complete and integral realization of a purchase process until its arrival at the checkout without the implementation of a payment gateway under the following journey:

- User filters products by category
- Select the product
- You can see the product features
- Select the product units limited to the maximum by the product Stock number
- The user adds the product to the cart
- In you can delete the products or completely empty the cart
- Fill in the delivery form
- Order the purchase
- The order is recorded in the database
- The database returns the purchase ID
- Successfull screen



This project was Built:
- ReactJs 17.0.2
- CSS
- Firebase 9.6.10


# Getting Started

## 1.Installation


```shell
git clone https://github.com/Abstrategic/ReactJS_SegundaEntrega.git
npm install
npm run build
```

## 2. Run Application

```shell
npm start
```

Also, you can install the dependencies libraries.
1. Install React Router Dom
```
npm install react-router-dom
```
2. Install firebase librarie for react
```shell
npm install firebase
```

Open http://localhost:3000 to see your store. 
##### Routes of store

Home - http://localhost:3000/admin  
Categories - http://localhost:3000/category/(name of category)
Product Detail - http://localhost:3000/item/(id of product)
Cart - http://localhost:3000/cart


## Application Structure

```
.
├── public                   # Static public assets and uploads
├── src                      # Application source code
│   ├── Adapters             # Standart data obj
│   │   └── .js              # Function adapters code
│   ├── Atoms                # Library of Componets in atoms
│   │   └── component        # Component JS and CSS code
│   ├── Components           # Library of Componets in atoms
│   │   └── Component        # Component JS and CSS code
│   ├── Context              # Isolate React Context
│   │   └── Code             # Cart code
│   ├── img                  # Image repository
│   ├── Services             # Services repository
│   │   └── firebase         # Firebase code

```


## Component List

List of components and indication about their rendering
### Atoms


- **Cartwidget** - Render the cart with the notification bullet
- **Formlist** - Render imputfield of form
- **FuncionCounter** - Render the counter (It has implemented logic based on increase, decrease and stock of the product in which it is mounted)
- **Item** - Render Product detail cart (Exclusive use in Home)
- **ItemCart** - Render summary of product (Exclusive use in Cart)
- **ItemDetail** - Render Product Detail (Exclusive use in Product detail)
- **Navlist** - Render category link of Nav
- **SocialItem** - Render social media Icons (Exclusive use in Footer)
- **UserLogin** - Render Link navigation

### Components

- **Cart** - Render the complete viewing of Cart( it has implemented the logical of the form and generate the order communicating with firebase and reatriving the necessary data for BD to generate the order)
- **Footer** - Render Footer of the page
- **ItemDetailContainer** - Render the Item detail View (It has implemented logic to share the props with Item detail Component)
- **ItemList** - Render Product detail (Exclusive use in Product detail)
- **ItemListContainer** - Render the Item List View 
- **Navbar** - Render Navigation Bar in the header

