let cart = JSON.parse(localStorage.getItem("gart")) || [];

let menu = document.getElementById("menu");

find();
async function find()
{
  let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`);
  let data = await res.json();
  let newdata = data.meals;
  get(newdata);
}



function get(newdata)
{
  newdata.forEach(function(ele)
  {
    let div = document.createElement("div");
    div.setAttribute("id","main");
    let img=document.createElement("img");
    img.setAttribute("id","food");
    img.src=ele.strMealThumb;
    let name=document.createElement("h4");
    name.innerHTML=ele.strMeal;
    let price = document.createElement("p");
    let rss=Math.round(Math.random()*(500-0)+0)
    price.innerHTML="Price  "+rss+" Rs Only/-";
    let butt = document.createElement("button");
    butt.innerText="Add to Cart";
    butt.addEventListener("click", function()
    {
    let s1={
      photo:ele.strMealThumb,
      na:ele.strMeal,
      pr:rss,
    }
    cart.push(s1);
    localStorage.setItem("gart",JSON.stringify(cart));
    document.getElementById("count").innerHTML=null;
    document.getElementById("count").innerHTML=cart.length;


    })
    div.append(img,name,price,butt);
    menu.append(div);
  })
}