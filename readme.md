Amazon
sharon Story Smith
Fall 2019
Node.js & MySQL program
​screen shot: bamazonPrintScreen.jpg

<!-- <img width=“1097” alt=“bamazonPrintScreen.jpg”> -->

<img width=“1097” alt=“bamazonPrintScreen.jpg” src=“bamazonPrintScreen.jpg”>



![automated demo of bamazon](.\assets\Images\bamazon.gif)

<!-- <iframe src="C:\utbootcamp\Homework\HW9bamazon" width="480" height="255" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="C:\utbootcamp\Homework\HW9bamazon">via GIPHY</a></p>

<iframe src="https://giphy.com/embed/ghOf5WFIve8EZBwYur" width="480" height="255" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ghOf5WFIve8EZBwYur">via GIPHY</a></p> -->


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

Terminal Line Input: 
   SEARCH prompts for an ID.

   LIST displays all  available items with data:  ids, names, departments and prices. 
​
   BUY​
   * The prompt asks the ID of the product to buy.
   * The second prompt asks the quantity of product      to buy.
   * If there is not enough quantity to supply the request, `Insufficient quantity!` is logged. 
​
         * However, if the store _does_ have enough product, the order is fulfilled. (Updates the SQL     database  to reflect remaining quantity.
         * Displays total cost of the purchase.

   QUIT

   
​

