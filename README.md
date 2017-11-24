# Sample Address Book App for React-Node-MySQL

## Getting this App up and running

1. First of all [Install or update NVM and Node](#install-or-update-nvm-and-node) (if you haven't done so)

2. Clone this repository:

 ```
 git clone https://github.com/eschwalm/address-book address-book
 ```

3. Set up testing database

 In the terminal log in as root and used the sample.sql file included in this repo
 ```
 mysql -u root
 mysql> source sample.sql;
 ```
 
 At this point you can test the actual connection to the database.
 ```
 mysql> use books;
 mysql> show tables;
 ```
 You should get:
 ```
 +-----------------+
 | Tables_in_contacts |
 +-----------------+
 | people        |
 +-----------------+
 1 row in set (0.00 sec)
 ```

4. Install server and client packages
 ```
 cd YOUR_PATH/address-book
 npm install
 cd client
 npm install
 ```

5. Start both server and client
 ```
 cd YOUR_PATH/address-book
 npm start
 ```
 The last lines of the output should be
 ```
 Starting the development server... 

 Compiled successfully!

 The app is running at:

   http://localhost:3000/

 Note that the development build is not optimized.
 To create a production build, use npm run build.
 ```
 You can now point your browser to http://localhost:3000/!
