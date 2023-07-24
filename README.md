# Employee Tracker
## Description

This application utilizes Node.js and the Inquirer package to create a command line application that allows users to view and manage the departments, roles, and employees in a company. 
Users can view all departments, roles, and employees as well as add new ones and update existing entries. MySQL is used to create the database and users can use tools such as MySQL Workbench to view the database and its contents.


## Usage

This application runs in the terminal so users will have to download the repository. It also requires users to have [Node.js](https://nodejs.org/en) installed. Once a user has installed Node, navigate to a terminal within the directory of the application. Install the Inquirer package by running the following command in the terminal: `npm install inquirer`. Install the dotenv package by running the following command in the terminal: `npm install dotenv`. Fill out the .env.EXAMPLE file and rename it to .env.

Users will have to have MySQL installed on their machine and can initially create the schema for the database. Users can then seed the database by using the seed.sql file for initial entries.

Run the application by running the following command in the terminal: `node prompt.js`. The application will give users a number of options which can be navigated with the arrow keys on the keyboard. Users can select the option they want by pressing the enter key. The database will reflect the changes made by the user.

Users can access the deployed GitHub pages site and browse through the different pages. The navbar at the top hosts the links to each page.

![Screenshot](/assets/images/screenshot.jpg)

Link to the deployed website itself:

https://github.com/Kevrev/note-taker

A video walkthrough of the application:

[insert video link here]

## Technology Used

- [Node.js](https://nodejs.org/en)

- [Inquirer.js](https://www.npmjs.com/package/inquirer)

- [Express.js](https://expressjs.com/)

- [MySQL](https://www.mysql.com/)

- [dotenv](https://www.npmjs.com/package/dotenv)

- [MySQL Workbench](https://www.mysql.com/products/workbench/)

## Credits

Credit to [this](https://medium.com/@kukreti.ashutosh/episode-2-mysql-database-setup-and-seeding-77873ce06e96) StackOverflow thread for helping me better understand how some of the product-routes api work in practice.

This StackOverflow blogpost bu [John Au-Yeung and Ryan Donovan](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/) also provided some helpful tips for REST API design. 