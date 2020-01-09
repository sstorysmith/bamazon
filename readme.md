bamazon
sharon Story Smith
Fall 2019
Node.js & MySQL program
​screen shot: bamazonPrintScreen.jpg

Overview​
This is an Amazon-like storefront. The app will take in orders from customers and deplete stock from the store's inventory.
                 ​
​
 A MySQL Database called `bamazon`.
​
   * A Table named `products`.
​
   * Id (unique id for each product)
​
   * ProductName (Name of product)
​
   * Dept (department)
​
   * Price (cost to customer, floating point)
​
   * Qty (how much of the product is available in stores)
​
This database is populated with these ID - Products. 
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
To run, goto the Bash Terminal line and enter: 
   $ node `bamazonCustomer.js`

Customer Input: 
   LIST runs the application which will  display all of the items available for sale:  ids, names, departments and prices. 
​
   BUY​
   * The first prompt asks the ID of the product they would like to buy.
   * The second prompt asks the count of the product they would like to buy.
   * If there is not enough of quantity to supply the request, the  phrase
    `Insufficient quantity!` is logged. 
​
   * However, if the store _does_ have enough of the product, the order is            fulfilled. 
   * Updates the SQL database to reflect the remaining quantity.
   * Displays the customer the total cost of their purchase.
​
