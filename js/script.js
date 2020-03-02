$(document).ready(function(){
  $("#b1").submit(function(){
    var pizzaSize =$("select#size, option:selected ").val();
  })
  var pizzaOrder = function Pizza(size, crust, topping, total){
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total
  }
  
  pizzaOrder1 = new pizzaOrder(pizzaSize,pizzacrust,pizzatopping)

  var pizzaSizePrice = 0;
  var pizzaCrustPrice = 0;
  var pizzaToppingPrice = 0;

  if(pizzaOrder1.size == "large"){
    pizzaSizePrice += 1500;
  }else if(pizzaOrder1.size == "medium"){
    pizzaSizePrice += 900;
  }else if(pizzaOrder1.size == "small"){
    pizzaSizePrice += 650;
  } 
   
  if(pizzaOrder1.crust == "Crispy"){
    pizzaOrderPrice += 100;
  }else if (pizzaOrder1.crust == "stuffed"){
    pizzaOrderPrice += 100;
  }else if (pizzaOrder1.crust == "gluten-free"){
    pizzaOrderPrice += 100;
  }
  
  if(pizzaOrder1.topping == "bacon"){
    pizzaOrderPrice += 50;
  }else if (pizzaOrder1.topping == "chicken"){
    pizzaOrderPrice += 50;
  }else if (pizzaOrder1.topping == "babycon"){
    pizzaOrderPrice += 50;
  }
  
})



// var ThisOrder = function(size,crust,topping,total){
//     this.size = size;
//     this.crust = crust;
//     this.topping = topping;
//     this.total=total
//   }
//   ThisOrder.prototype.price =function(){
//       var order = new ThisOrder($("size").val())
//       var order = new ThisOrder($("crust").val())
//       var order = new ThisOrder($("toppings").val())

//     let price = 0;
//     if(this.size === "large"){
//       price = 1500;
//     }
//     else if (this.size === "medium"){
//       price = 900;
//     }
//     else if( this.size === "small"){
//       price =650;
//     }
//     else
//     alert("Please enter your sizes")
//     let totalPrice= price + 150;
//      totalPrice = totalPrice*this.total
//     //   var delivery = prompt("Would you like  to pickup from our location or have a delivery ?")
//     //    if( delivery === "pickup"){
//     //      alert("Thank you for choosing pizza gyoza")
//     //    }
//     //    else if( delivery === "delivery"){
//     //      alert("You have to add an extra 100");
//     //      Total = Total + 100;
//     //      var place = prompt("Where do you live ?")
//     //      $("#place").text("Your location is "+place)
//     //    }
//     //  $("#total").text("Your total is "+Total)
// }
//   $("#b1").click(function(){
//     // var size = $("#form1").val();
//     // var toppings = $("#form4").val();
//     // var crust = $("#form3").val();
//     // var total=$("#number").val();
//     let Order= new ThisOrder(size,crust,toppings,total);
//     myOrder.price();
//   }
// )