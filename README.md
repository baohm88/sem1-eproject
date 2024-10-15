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
- backend
- frontend

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
