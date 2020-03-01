var size , crust ,toppings ;
var total= 0;
function order(size,crust ,toppings ,total){
    this.size = size;
    this.crust = crust;
    this.toppings =toppings;
    this.total = total;
}
$(document).ready(function(){
    $("button.order").click(function(event){
        var size=$("#size option:selected").val();
        var crust=$("#crust option:selected").val();
        var toppings=("#toppings option:selected").val();
    })
if ("large"){
    price = 1500;
}    
if("medium"){
    price = 900;
}    
if("small"){
    price = 650;
}    
if("crispy"){
    price = 100
}
if("stuffed"){
    price =100
}
if("gluten-free"){
    price = 100
}
if ("bacon"){
    price = 50
}
if ("chicken"){
    prize = 50
}
if ("babycon"){
    price = 50
}
})