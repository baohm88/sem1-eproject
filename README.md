# Team2Fly E-Project

This is an e-commerce platform for skincare and makeup products where users can view, add products to the cart, and place orders. Admins can manage categories, products, and orders.

## Getting Started

Follow the instructions below to clone the project and set it up locally.

### Prerequisites

-   VS Code
-   XAMPP 8.2.4 or newer
-   Node.js (for managing frontend dependencies, if any)
-   Git

### Clone the Repository

To clone the repository, run the following command:

```bash
git clone https://github.com/baohm88/team2fly-eproject.git
```

Navigate into the project folder:

```bash
cd team2fly-eproject
```

Here you will see 2 folders:

-   backend
-   frontend

## Setup Backend

1. Open XAMPP, start both MySQL Database and Apache Web Server
2. Visit "http://localhost/phpmyadmin/index.php?route=/server/databases", create a database and name it "project".
3. Open the "project" database and import the "project.sql" file from the "backend" folder.
4. Navigate to XAMPP Application Folder -> open the htdocs folder -> create a folder and name it "project".
5. Copy all files from the backend folder and paste them to the newly created "project" folder.
6. Navigate to the app/configs folder and update the database.php file with your database credentials:

```bash
$host = "mysql:host=localhost:3306;dbname=project";
$username = your_database_username; // ex: "root"
$pass = your_database_password; // ex: "123456"
```

## Setup Frontend

1. Navigate to the frontend directory:

```bash
cd frontend
```

then

```bash
cd clarins-store
```

2. Install the required dependencies:

```bash
npm install
```

3. Run the frontend server:

```bash
npm start
```

### Register a New Account

1. Navigate to the registration page (/register) on the website.
2. Fill out the required fields (username, password, email, etc.) and submit the form.
3. After successful registration, you will be directed to the (/login) page.

### Login

1. Enter your credentials and click on the Login button.
2. Upon successful login, you will be redirected to the home page.

### Viewing Products
1. After logging in, go to the Home page to view all available products.
2. You can filter products by category (Skincare, Makeup, etc.), for by their sub categories (Face, Body, Sun, Men, Eyes, Lips) or by price range using the slider.
3. You can sort the products by name (A-Z, Z-A) or by price (low-to-high, high-to-low).
4. Click the "Quick View" button below each product to see brief summary of the product or click on it to view it's all details, including ratings & comments made by other users.
5. You can also rate the product and leave comments if you purchase that product.


### Adding Items to the Cart
1. Browse for a product, 
2. Click the Add to Cart button and the product will be added to your cart.

### View the Cart

1. Click the cart icon on the top right corner to see all items in your cart.
2. You can adjust the quantity of each items, but clicking + or - buttons or remove the item from your cart by clicking x button.
3. You can also see the total amount of all the items in your cart.

### Place an Order

1. Once you are satisfied with the items in your cart, click Proceed to Checkout.
2. Your order will be placed and pending for approval from the admin.

### View past Orders

1. Navigate to the Orders page to see all the orders you placed previously.
2. Click on each order to view all the items of that order.
