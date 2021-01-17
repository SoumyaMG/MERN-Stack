var currentInventory = [ {name: "HTC", stock: 25},{name: "Nokia", stock: 1000}, 
{name: "Samsung", stock: 50},{name: "Sony", stock: 10}, {name: "Apple", stock: 15}];

var newInventory = [ {name: "LG", stock: 5},
 {name: "Sony", stock: 10}, {name: "Samsung", stock: 5}, {name: "Apple", stock: 15}];

 var currentInventory = [ {name: "HTC", stock: 25},{name: "Nokia", stock: 1000}, 
 {name: "Samsung", stock: 50},{name: "Sony", stock: 10}, {name: "Apple", stock: 15}];
 
 var newInventory = [ {name: "LG", stock: 5},
  {name: "Sony", stock: 10}, {name: "Samsung", stock: 5}, {name: "Apple", stock: 15}];
 
 function inventoty(a,b)
 {
     for(let i=0;i<b.length;i++)
    { 
      let item=a.find(function(lineItem)
     {
         return lineItem.name==b[i].name
     })
     if(item)
     {
         item.stock=item.stock+b[i].stock
     }
     else{
         a.push(b[i])
     }
    }
     console.log(a) 
 }
 
 inventoty(currentInventory,newInventory)