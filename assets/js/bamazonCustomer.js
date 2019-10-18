// https://html-online.com/articles/javascript-variable-php-mysql-ajax-post-json/
// inserting securely - preventing injections
//
//SQL injection usually occurs when you ask a user for input, like their 
//username/userid, and instead of a name/id, the user gives you an SQL statement
// that you will unknowingly run on your database.
//  ? can you limit the number of characters you accept from the command line?

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
    console.log("Sharon, you are connected to database bamazon");
  if (err) throw err;
  
  // getCustomerInput();
       
});

let totalPurchases = 0.00;

let answer = "BUY";

if (answer==="LIST") {
            console.log("about to call the displayAllItems function");
            displayAllItems();        
          }
          else {
          if (answer === "SEARCH") {
              console.log("about to call the idSearch function");
            idSearch();           
            }
            else {
              if (answer === "BUY"){
              console.log("about to call the buyProduct function");
            buyProduct();                  
              }
        }};


        // "ID - Enter the ID of the items you'd like to buy.",
        // "BUY - Enter the count of how many items you'd like to BUY.",       

// function getCustomerInput() {
//   inquirer
//     .prompt({
//       name: "action",
//       type: "list",
//       message: "What would you like to do?",
//       choices: [
//         "LIST",
//         "ID - Enter the ID of the items you'd like to buy.",
//         "BUY - Enter the count of how many items you'd like to BUY.",        
//       ]
//     })
//     .then(function(answer) {
//         if (answer==="LIST") {
//           console.log("about to call the displayAllItems function");
//           // displayAllItems();
      
//         }
//         else {
//         if (answer === "ID - Enter the ID of the items you'd like to buy.") {
//             console.log("about to call the idSearch function");
//           idSearch();
         
//         }
//           else {
//             if (answer === "BUY - Enter the count of how many items you'd like to BUY.") {
//             console.log("about to call the buyProduct function");
//           buyProduct();
                
//         }
//         console.log(answer);
//       }
//     }
//     });
//  }



 function idSearch() {
  let ID = 0;
   inquirer
     .prompt({
       name: "id",
       type: "input",
       message: "What ID would you like to search for?"
     })
     .then(function(answer) {
      let ID = parseInt(answer.id);      
      console.log("identity is: " + ID);
       
     
        
       var query = "SELECT ID, Dept, ProdName, Qty FROM products WHERE ?)";
       connection.query(query, { Id: answer.Id }, function(err, res)    {
      
       
//       connection.query(query, { Id: answer.Id }, function(err, res) {
         for (var i = 0; i < res.length; i++) {
           console.log("ID: " + res[i].Id + " || ProdName: " + res[i].ProdName + " || Price: " + res[i].Price);
         }
//         getCustomerInput();
       });
     });
 }

function displayAllItems() {
  console.log("in the displayAllItems function");
 
  var query = "SELECT * FROM products ORDER BY ProdName";
  connection.query(query, function(err, res) 
   {
    for (var i = 0; i < res.length; i++) {
       console.log("Id: " + res[i].Id + " || NAME: " + res[i].ProdName + " || PRICE: " + res[i].Price + " || quantity: " + res[i].Qty);
    }
    getCustomerInput();
  });
}

function buyProduct() {
  let newQty=0;
  let Qty=10;
  inquirer
    .prompt({
      name: "buyId",
      type: "input",
      message: "Enter product id to buy?"
    }) .then(function(answer) {
      //get the product information
      // console.log(" abput to query specific id: " + answer.buyId + " quantity= " + Qty);  
      var item=answer.buyId;
      console.log(item);
      // var query = "SELECT Id, Dept, ProdName, Qty FROM products WHERE ?)";

      var query = "SELECT * FROM Products WHERE ?)";
      // connection.query(query, { Id: answer.buyId }, function(err, r)    {
        connection.query(query, { Id: answer.buyId }, function(err, r)    {
            //console.log(item + " queried specific id: " + answer.buyId + " quantity= " + responseSelect.Qty);  
            console.log(item );   
            console.log(r[0].ProdName);
            console.log(r[0].Qty);

            inquirer
            .prompt({
              name: "buyCount",
              type: "input",
              message: "Enter count of items to buy?"
            })  .then(function(answer) {
      if (answer.buyCount > r[id].Qty) {
        console.log(r[id].Qty);
          console.log(`Insufficient quantity!`);
                                  }
      else {
          console.log("Function buy  answer: " + answer.buyCount + "  reply.buyId= " + answer.buyId);
            //update quantity by count ordered    
            newQty= responseSelect.Qty - answer.buyCount;
            console.log("function buy: " +  answer.buyCount + "  new quantity quantity: " + newQty);
        //UPDATE
          let query = "UPDATE products SET Qty = newQty WHERE ?";
          connection.query(query, { id: answer.buyId }, function(err, responseUpdate)
             {
             console.log( "ID: " +
                 answer.buyId +
                 " updated from quantity Qty: "+ responseSQL.Qty + " to new quantity" + newQty); 
           });
          totalPurchases += responseSQL.Price;
          // CustomerInput();
    
          }; 
                              });    
  }); 
});
}
