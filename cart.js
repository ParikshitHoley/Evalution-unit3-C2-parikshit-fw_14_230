get();

  
    get();
  function get()
  {

    let arr = JSON.parse(localStorage.getItem("gart"));
    var tot=0;
    document.getElementById("tbody").innerHTML=null;
     arr.forEach(function(ele,index)
     {
       let tr = document.createElement("tr");
       let td1 = document.createElement("td");
       td1.setAttribute("id","img1");
       let img = document.createElement("img");
       img.setAttribute("id","img")
       img.src=ele.photo;
       let name = document.createElement("p");
       name.innerHTML=ele.na;
       let td2 = document.createElement("td");
       let td3=document.createElement("td");
       let prc=document.createElement("h4");
       prc.innerHTML=ele.pr+" /-";
       td3.append(prc);
       document.getElementById("total").innerHTML=null;

       tot+=ele.pr;
       document.getElementById("total").innerHTML=tot+"  Rs Only/-";
      let butt2=document.createElement("button");
      butt2.innerText="remove";


     butt2.addEventListener("click",function()
     {
        event.target.parentNode.parentNode.remove();
        tot=tot-ele.pr;
        document.getElementById("total").innerHTML=null;
        document.getElementById("total").innerHTML=tot+"  Rs Only/-";
        arr.splice(index,1);
        localStorage.setItem("gart",JSON.stringify(arr))
        

     })

      let td4=document.createElement("td");
      td4.append(butt2)
       td1.append(img);
       td2.append(name);
       tr.append(td1,td2,td3,td4);
       let tbody=document.getElementById("tbody");
       tbody.append(tr);
      console.log("he")

     })

  }


  function go()
  {
    window.location.href="checkout.html"
  }