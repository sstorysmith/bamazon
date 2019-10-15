# Node.js & MySQL
​
## Overview
​
This is an Amazon-like storefront.
The app will take in orders from customers and deplete stock from the store's inventory.
                 As a bonus task, you can program your app to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.
​
Make sure you save and require the MySQL and Inquirer npm packages in your homework files--your app will need them for data input and storage.
​


​
 A MySQL Database called `bamazon`.
​
    A Table called `products`.
​
   * item_id (unique id for each product)
​
   * product_name (Name of product)
​
   * department_name
​
   * price (cost to customer)
​
   * stock_quantity (how much of the product is available in stores)
​
This database is populated with these products. 
        coffee maker
        extension ladder
        seat covers 
        back pack 
        Dr. Pepper
        bicycle
        bicycle helmet
        cowboy boots
        laptop computer
        leather jacket

​
This Node application, called `bamazonCustomer.js`, runs the application which will first display all of the items available for sale:  ids, names, and prices. 
​
The app then prompts users with two messages:
​
   * The first asks them the ID of the product they would like to buy.
   * The second message asks how many units of the product they would like to buy.
​
Once the order is placed, the application checks if the store has enough of the product to meet the request.
​
   * If not, the app should logs a phrase `Insufficient quantity!`, then prevents the order from going through.
​
8. However, if the store _does_ have enough of the product, the order is fulfilled. 
   * Updates the SQL database to reflect the remaining quantity.
   * Displays the customer the total cost of their purchase.
​
- - -
​
* If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.
​
- - -
​
### Challenge #2: Manager View (Next Level)
​
* Create a new Node application called `bamazonManager.js`. Running this application will:
​
  * List a set of menu options:
​
    * View Products for Sale
    
    * View Low Inventory
    
    * Add to Inventory
    
    * Add New Product
​
  * If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.
​
  * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.
​
  * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.
​
  * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.
​
- - -
​
* If you finished Challenge #2 and put in all the hours you were willing to spend on this activity, then rest easy! Otherwise continue to the next and final challenge.
​
- - -
​
### Challenge #3: Supervisor View (Final Level)
​
1. Create a new MySQL table called `departments`. Your table should include the following columns:
​
   * department_id
​
   * department_name
​
   * over_head_costs (A dummy number you set for each department)
​
2. Modify the products table so that there's a product_sales column, and modify your `bamazonCustomer.js` app so that when a customer purchases anything from the store, the price of the product multiplied by the quantity purchased is added to the product's product_sales column.
​
   * Make sure your app still updates the inventory listed in the `products` column.
​
3. Create another Node app called `bamazonSupervisor.js`. Running this application will list a set of menu options:
​
   * View Product Sales by Department
   
   * Create New Department
​
4. When a supervisor selects `View Product Sales by Department`, the app should display a summarized table in their terminal/bash window. Use the table below as a guide.
​
| department_id | department_name | over_head_costs | product_sales | total_profit |
| ------------- | --------------- | --------------- | ------------- | ------------ |
| 01            | Electronics     | 10000           | 20000         | 10000        |
| 02            | Clothing        | 60000           | 100000        | 40000        |
​
5. The `total_profit` column should be calculated on the fly using the difference between `over_head_costs` and `product_sales`. `total_profit` should not be stored in any database. You should use a custom alias.
​
6. If you can't get the table to display properly after a few hours, then feel free to go back and just add `total_profit` to the `departments` table.
​
   * Hint: You may need to look into aliases in MySQL.
​
   * Hint: You may need to look into GROUP BYs.
​
   * Hint: You may need to look into JOINS.
​
   * **HINT**: There may be an NPM package that can log the table to the console. What's is it? Good question :)
​
### Reminder: Submission on BCS
​
* Please submit the link to the Github Repository!
​
- - -
​
### Minimum Requirements
​
Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.
​
- - -
​
### Create a README.md
​
Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:
​
* [About READMEs](https://help.github.com/articles/about-readmes/)
​
* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
​
- - -
​
### Add To Your Portfolio
​
After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.
​
- - -
​
### One More Thing
​
If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.
​
**Good Luck!**
Col