"use strict";

let products = [
  { id: 11, name: "Laptop", quantity: 3 },
  { id: 22, name: "Smartphone", quantity: 5 },
  { id: 33, name: "Headphones", quantity: 3 },
  { id: 44, name: "Tablet", quantity: 1 },
  { id: 55, name: "Smartwatch", quantity: 2 },
];


const getProductNames = () => {
  let productsNames=[];

  if(products.length){
  for(let i=0; i<products.length; i++){
  productsNames.push(products[i].name)
  }
  console.log(productsNames)
 } else{
 console.log("array is empty so you can not get names of products")
 }

};


const getProductByName = (productName) => {
  let product
  if(productName){
  if(products.length){
  for(let i=0; i<products.length; i++){
 if(products[i].name===productName){
  product=products[i]
   break
 }
 else{
  product="product not found"
 }
}
console.log(product)
  }
  else{
  console.log("array is empty")  
  }
 }
 else{
  console.log("productName is required")  
  }

};


const getProductsBelowQuantity = (quantity) => {
  let productsWithSpecificIndex=[]
  if(quantity){
  if(products.length){
  for(let i=0; i<products.length; i++){
    if(i<=quantity){
      productsWithSpecificIndex.push(products[i])
     }
  }
  console.log(productsWithSpecificIndex)
}
else{
  console.log("array is empty")  
  }
  }
  else{
    console.log("quantity is required")  
    }
};

const updateProductQuantity = (id, newQuantity) => {
  if(id&newQuantity){ 
  if(products.length){ 
  for(let i=0; i<products.length; i++){
   if(products[i].id===id){
   products[i].quantity=newQuantity;
   break;
   }
   else{
   products= "id not found " 
   }
  }
  console.log(products) 
}
else{
  console.log("array is empty")   
}
}else if(id){
 console.log("quantity is required")  

}else if(!id&!newQuantity){
  console.log("id and quantity are required")  
}

};

// ----- RESULTS -----

getProductNames();
// OUTPUT: ["Laptop", "Smartphone", "Headphones", "Tablet", "Smartwatch"]

getProductByName("Tablet"); // OUTPUT: { id: 44, name: "Tablet", quantity: 1 }
getProductByName("phone"); // output:product not found
getProductByName(); // productName is required


getProductsBelowQuantity(2);
// // OUTPUT: [{ id: 11, ... }, { id: 22, ... }, { id: 33, ... }]


updateProductQuantity(11,10); // [{ id: 11, name: "Laptop", quantity: 10 }, ...]
updateProductQuantity(11);  // quantity is required
updateProductQuantity();  // id and quantity are required
updateProductQuantity(10,12); // id not found

