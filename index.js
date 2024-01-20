//  const foodImg = document.querySelector("#img-1");
//  const foodText_1 = document.querySelector(".inner-text1");
//  const foodText_2 = document.querySelector(".inner-text2");
//  const btnLeft = document.querySelector("#rightbtn")
//  const foodHolder = document.querySelector(".food-box")
//  console.log(foodImg , foodText_1 , foodText_2 , foodHolder) 

//  const foodArray =[
//     {
//         foodUrl : "./assests/_cc226cf5-2147-430e-b16c-84644636b1fe-removebg-preview 1.png",
//         foodName: "suschi combo",
//         foodName_2: "(82 dishes)",
       
//     },
//     {
//         foodUrl : "./assests/Sushi Salad -- 3.png",
//         foodName: "breakfast",
//         foodName_2: "(82 dishes)" 
//     },
//     {
//         foodUrl : "./assests/Sushi Salad -- 2.png",
//         foodName: "lunch",
//         foodName_2: "(82 dishes)" 
//     },
//     {
//         foodUrl : "./assests/Sushi Salad 1.png",
//         foodName: "dinner",
//         foodName_2: "(82 dishes)" 
//     },
//     {
//         foodUrl : "./assests/Sushi Salad 1.png",
//         foodName: "dinner",
//         foodName_2: "(82 dishes)" 
//     }
// ];

//  btnLeft.addEventListener("click" , function(){
//     const randomFoodArray = Math.floor ( Math.random()*foodArray.length);
//     foodImg.src = foodArray[randomFoodArray].foodUrl
//     foodText_1.textContent = foodArray[randomFoodArray].foodName
//     foodText_2.innerHtml = foodArray[randomFoodArray].foodName_2
//  });

 const cancelBtn = document.querySelector(".cancel-button");
 const menuBtn = document.querySelector (".menu-button");
 const navMobile = document.querySelector(".mobile-view-Nav")
  console.log(cancelBtn , navMobile, menuBtn)
 
  cancelBtn.addEventListener("click" , function (){
     navMobile.style.display = 'none'
     console.log('red')
  })
 
  menuBtn.addEventListener("click" , function (){
    navMobile.style.display = "block"
    console.log('red');
  })
