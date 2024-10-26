function vendingMachine() {
    
    const items = {
       chips: 50,
       chocolate: 100,
       soda: 80,
       water: 30
    };
 
    
    const stock = {
       chips: 5,
       chocolate: 3,
       soda: 10,
       water: 8
    };
 
   
    let itemList = "Available items:\n";
    for (let item in items) {
       itemList += `${item}: Rs ${items[item]} (In stock: ${stock[item]})\n`;
    }
    alert(itemList);
 
 
    const selectedItem = prompt("Please enter the name of the item you want to buy:");
 
    
    if (items[selectedItem] && stock[selectedItem] > 0) {
       const price = items[selectedItem];
       
       
       const insertedAmount = parseInt(prompt(`The price of ${selectedItem} is Rs ${price}. Please enter the amount:`), 10);
 
       
       if (insertedAmount >= price) {
          const change = insertedAmount - price;
          stock[selectedItem]--; 
          alert(`Dispensing ${selectedItem}. Your change: Rs ${change}`);
       } else {
          alert(`Insufficient funds! ${selectedItem} costs Rs ${price}. You inserted Rs ${insertedAmount}.`);
       }
    } else {
       alert("Item not available or out of stock!");
    }
 }
 
 vendingMachine();