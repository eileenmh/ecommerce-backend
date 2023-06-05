# Professional README Generator

For this week's challenge, we were asked to build the back end for an e-commerce site using Sequelize and MySQL. Their are API routes to perform actions on the products, categories, and tags in the database; specifically, it's possible to do the following for each:

- View all
- View one based on id
- Create
- Update
- Delete

The following is a demo of how the application works:
https://watch.screencastify.com/v/OfjNBOQnk7aqfVA5cMRz

## Acceptance Criteria
We were provided with the following acceptance criteria:
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Installation

- Download [Node.js](https://nodejs.dev/en/download/). To verify the installation and check for npm, run the following commands in your terminal:
```
Node --version
npm --version
```
- Download the code for the application from [the repository](https://github.com/eileenmh/ecommerce-backend) as a .zip file and then open it, or clone the repository.
- Next you'll need to install the packages listed in package.json by opening the terminal, changing the directory to the application's root, and then running:
```
npm install
``` 
This will download the packages necessary to run the application.

In the root folder, you'll see a `.env` file. This is where local variables are made available to the application. Set "ecommerce_db" for `DB_NAME`, "root" for `DB_USER`, and enter your mysql password for `DB_PW`. If you're new to mysql, refer to the [documentation on getting started](https://dev.mysql.com/doc/mysql-getting-started/en/) to set up your local environment.

Finally, you'll need to set up the database's schema and seed the data. Open up the db folder in your terminal and run:

```md
mysql -u root -p
SOURCE schema.sql
quit
```

Then move back to the root directory, and run the following in your terminal:

```md
npm run seed
```

## Usage Information
Make sure you've followed the installation steps before using the app.
To run the application enter the following command while you are in the application's root directory:
```
npm run watch
```
This will start your server. Then use an API development Platform like [Insomnia](https://insomnia.rest/) to test the different API routes.

## Built With
- [Node.js](https://nodejs.org/en)
- [Express](https://www.npmjs.com/package/express)
- [Sequelize](https://sequelize.org/)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [dotenv](https://www.npmjs.com/package/dotenv)


## Credits

- Project prompt provided by [UNC Coding Bootcamp](https://bootcamp.unc.edu/coding/) with [started code](https://github.com/coding-boot-camp/fantastic-umbrella)
- Created by Eileen Harvey ([@eileenmh](https://github.com/eileenmh))