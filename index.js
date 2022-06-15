// Description
// We want you to create a shopping list price displayer. You should be able to see in a list each item followed by its price!

// Instructions
// - Use these items and it's respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
// - Store this information using the most appropriated data structures we've studied so far
// - Have a prompt to add an item to the list (you can have two prompts for the item and its price)
// - Output a list displaying each item and its price
// - Output the total at the end


let products = ["Milk", "Cocoa", "Salad", "Carrots", "Tomatoes", "ReadyMeals"];
let prices = [1.20 , 2.00 , 2.00 , 2.00 , 2.50 , 5.00 ]

let newItem = confirm("Add a new item")
if(newItem == true){
        let newProduct = prompt("Add a new product")
        products.push( newProduct)

        let newPrice = prompt("Type your price")
        prices.push (Number(newPrice))

        alert("You added a new product")

}else{
    alert("Product failed to add")
}