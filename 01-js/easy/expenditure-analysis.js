/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  if(transactions.length > 0){
    let categories = [];
    transactions.map(ele =>{
      let ifCategoriesExistsIndex = -1; 
      ifCategoriesExistsIndex = categories?.findIndex((item) => {
      return item.category === ele.category});
      if(ifCategoriesExistsIndex !== -1){
        categories[ifCategoriesExistsIndex].totalSpent += ele.price;
      } else {
        categories.push({category : ele.category, totalSpent : ele.price})
      }
    });
    return categories
  }
  else {
    return [];
  }
}

const dataArray = [
  { itemName: 'Laptop', category: 'Electronics', price: 10, timestamp: '2023-01-01T08:00:00' },
  { itemName: 'T-shirt', category: 'Clothing', price: 20, timestamp: '2023-01-02T12:30:00' },
  { itemName: 'Book', category: 'Books', price: 10, timestamp: '2023-01-03T15:45:00' },
  { itemName: 'Table Lamp', category: 'Home Decor', price: 20, timestamp: '2023-01-04T10:15:00' },
  { itemName: 'Basketball', category: 'Sports', price: 30, timestamp: '2023-01-05T17:20:00' },
  { itemName: 'Smartphone', category: 'Electronics', price: 10, timestamp: '2023-01-06T09:30:00' },
  { itemName: 'Jeans', category: 'Clothing', price: 20, timestamp: '2023-01-07T14:00:00' },
  // { itemName: 'Notebook', category: 'Books', price: 5.99, timestamp: '2023-01-08T11:45:00' },
  // { itemName: 'Candle Holder', category: 'Home Decor', price: 9.99, timestamp: '2023-01-09T16:10:00' },
  // { itemName: 'Soccer Ball', category: 'Sports', price: 19.99, timestamp: '2023-01-10T12:00:00' },
  // { itemName: 'Headphones', category: 'Electronics', price: 129.99, timestamp: '2023-01-11T18:25:00' },
  // { itemName: 'Dress', category: 'Clothing', price: 49.99, timestamp: '2023-01-12T13:40:00' },
  // { itemName: 'Cookbook', category: 'Books', price: 12.99, timestamp: '2023-01-13T10:50:00' },
  // { itemName: 'Wall Clock', category: 'Home Decor', price: 24.99, timestamp: '2023-01-14T15:15:00' },
  // { itemName: 'Baseball Glove', category: 'Sports', price: 39.99, timestamp: '2023-01-15T11:30:00' },
  // { itemName: 'Camera', category: 'Electronics', price: 549.99, timestamp: '2023-01-16T17:05:00' },
  // { itemName: 'Sweater', category: 'Clothing', price: 44.99, timestamp: '2023-01-17T14:20:00' },
  // { itemName: 'Novel', category: 'Books', price: 9.95, timestamp: '2023-01-18T09:55:00' },
  // { itemName: 'Vase', category: 'Home Decor', price: 19.99, timestamp: '2023-01-19T16:30:00' },
  // { itemName: 'Basketball Shoes', category: 'Sports', price: 79.99, timestamp: '2023-01-20T12:10:00' }
];
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
];
console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
