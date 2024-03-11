/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
   var spendEstimates = {};
  for(var i = 0; i < transactions.length; i++){
    var obj = transactions[i];
    if(spendEstimates[obj.category])
      spendEstimates[obj.category] += obj.price;
    else
      spendEstimates[obj.category] = obj.price;
  }

  var result = [];
  var keys = Object.keys(spendEstimates);
  
  for(var i = 0; i < keys.length; i++){
    //result.push(spendEstimates[i]);
    result.push({
      category : keys[i],
      totalSpent : spendEstimates[keys[i]]
    });
    
  }
  return result
}


module.exports = calculateTotalSpentByCategory;

  