bamazon
sharon Story Smith    storysmithsharon@gmail.com
Fall 2019
Bootstrap, NodeJS, Gitbash terminal line, MYSQL


Screen Shot:  ![screen shot](.\assets\Images\ScreenShot.jpg)

Working Demo:![demo of bamazon](.\assets\Images\bamazon.gif)

Developer: 
     - Install MySQL and create a database and table per:
         A MySQL Database called `bamazon`.
​
         * A Table named `products`.
​
         * Id (Unique id for each product)
      ​
         * ProductName (Name of product)
      ​
         * Dept (Department)
      ​
         * Price (Cost to customer, floating point)
      ​
         * Qty (How much of the product is available in stores)

        = See the list below for data used in this deployed app.

     - Download code from Github, install node, 
     - To run, goto the Bash Terminal line and enter: 
          $ node bamazonCustomer.js

Overview​:
This is an Amazon-like storefront. The app will take in orders from a customer and remove stock from the store's inventory. All interaction is via the Command Line Interface (CLI).  
​
=This database in the deployed app is populated with these IDs and Products: 
        10  coffee maker
        20  extension ladder
        30  seat covers 
        40  back pack 
        50  Dr. Pepper
        60  bicycle
        70  bicycle helmet
        80  cowboy boots
        90  laptop computer
        100 leather jacket

​

Terminal Line Input: 
   SEARCH prompts for an ID.

   LIST displays all  available items with data:  ids, names, departments and prices. 
​
   BUY​
   * The first prompt asks the ID of the product they would like to buy.
   * The second prompt asks the count of the product they would like to buy.
   * If there is not enough of quantity to supply the request, the  phrase
    `Insufficient quantity!` is logged. 
​
         * However, if the store _does_ have enough of the product, the order is fulfilled. 
                Updates the SQL database to reflect the remaining quantity.
   * Displays total cost of the purchase.


   App Design: This is designed to use MySQL and bamazonCustomer.js must be modified to work
   with the user's installation and id/password.
​
