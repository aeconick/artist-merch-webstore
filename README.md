# artist-merch-webstore

**TStore** is a web application (Single Page Application) using AngularJS i've made as a final project for [SoftUni's](https://softuni.bg/) AngularJS Course. The app is a basic internet store that lets users buy merch from their favorite artist. The application uses Express server as a backend and [MongoDB Atlas](https://www.mongodb.com/atlas/database) as a NoSQL database.

## Application Structure
The application consists of two parts - **Public** (Accessible without authentication) and **Private** (Available for Registered Users).

 ### Public Part

 This part is visible without authentication. It consists of: 
 - ***Welcome*** page - the main page of the app. It  prompts users to buy merch or learn more about the artist.
 - ***Merch*** page - users can brose thought the merch catalog and select an item to view more about it or add it to their cart.
 - ***Login*** page - lets users that have already registered log into their account and access functionality that requires authentication.
 - ***Register*** page - lets users make an account.
 - ***Cart*** page - lets see the items they've added to their cart.
 - ***About*** page - static page that let's users read more about the artist and check out their social medias.

 ### Private Part
 This part is visible only to authenticated users. It lets them have access to:
 - ***Profile*** page - user can see their profile info and the past purchases they've made.
 - ***Checkout*** pages - only authenticated users can buy merch from the store, which means that all pages having to do with completing an order are accessable only to logged in users.
  - ***Admin*** functionality - the admin can create and delete items using the admin panel.
  
 ### Application Architecture
The app is divided to multiple pages, which share partials components between them, like:
- Header
- Title
- Search
- Input
- Tags
- Button
- Loading
- Not-Found
- Order-Items
- Paypal-Button

Components use services to make api calls and share access to data. The services in this project are:
 - ***Cart*** service - deals with the items added to the cart.
 - ***Item*** service - deals with merch items shown in the merch page.
 - ***Loading*** service - deals with the loading state.
 - ***Order*** service - deals with the orders data.
 - ***User*** service - deals with all the information about the user.

 The shated folder has four folder that add additional functionality:
 - ***Constants*** - stores files with constant data like: **urls**.
 - ***Interceptors*** - stores files with interceptors like: **loading.interceptor**.
 - ***Interfaces*** - stores files with interfaces like: **IUserLogin** or **IUserRegister**.
 - ***Models*** - stores files with models like: **Cart**, **Item**, **User**, etc.
 - ***Validator*** - stores files with validators like: **password_match_validator**.

 ### Starting The Application
 The repository consists of two folders: **client** and **server**.

1. To start the server you need to open a new terminal at the **server** directory and run the command:

```console
npm i
npm start
```

2. To start the client you need to open a new terminal at the **client** directory and run the command:

```console
npm i
npm start
```