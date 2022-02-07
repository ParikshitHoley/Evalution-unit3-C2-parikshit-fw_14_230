function order()
  {
    alert("order id accepted");

    setTimeout(find(),3000);
    setTimeout(find2(),8000);
    setTimeout(find3(),1000)
    setTimeout(find4,12000)

    function find()
    {
      alert("your order is being coocked")
    }
    function find2()
    {
      alert("Your order is ready 10 seconds")
    }
    function find3()
    {
      alert("Order out for delivery")
    }
    function find4()
    {
      alert(" Order delivered")
    }
   
  }