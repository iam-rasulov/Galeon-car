const elConditionsList = document.querySelector(".conditions-inner__box__list")

const btn1 = document.querySelector(".conditions-inner__box__item__btn");
const btn2 = document.querySelector(".conditions-inner__box__item__btn2");
const btn3 = document.querySelector(".conditions-inner__box__item__btn3");
const btn4 = document.querySelector(".conditions-inner__box__item__btn4");
const btn5 = document.querySelector(".conditions-inner__box__item__btn5");

const elSubList = document.querySelector(".conditions-inner__box__item__list");
const elSubList2 = document.querySelector(".conditions-inner__box__item__list2");
const elSubList3 = document.querySelector(".conditions-inner__box__item__list3");
const elSubList4 = document.querySelector(".conditions-inner__box__item__list4");
const elSubList5 = document.querySelector(".conditions-inner__box__item__list5");


btn1.addEventListener("click", function (){
  btn1.classList.toggle("btn-up")
  elSubList.classList.toggle("d-block")
})
btn2.addEventListener("click", function (){
  btn2.classList.toggle("btn-up")
  elSubList2.classList.toggle("d-block")
})
btn3.addEventListener("click", function (){
  btn3.classList.toggle("btn-up")
  elSubList3.classList.toggle("d-block")
})
btn4.addEventListener("click", function (){
  btn4.classList.toggle("btn-up")
  elSubList4.classList.toggle("d-block")
})
btn5.addEventListener("click", function (){
  btn5.classList.toggle("btn-up")
  elSubList5.classList.toggle("d-block")
})


// elConditionsList.addEventListener("click", evt => {

//   if(evt.target.matches(".conditions-inner__box__item__btn")){
//     elSubList.classList.toggle("d-block")
//    }

//    if(evt.target.matches(".conditions-inner__box__item__btn2")){
//     elSubList2.classList.toggle("d-block")
//    }

//    if(evt.target.matches(".conditions-inner__box__item__btn3")){
//     elSubList3.classList.toggle("d-block")
//    }

//    if(evt.target.matches(".conditions-inner__box__item__btn4")){
//     elSubList4.classList.toggle("d-block")
//    }

//    if(evt.target.matches(".conditions-inner__box__item__btn5")){
//     elSubList5.classList.toggle("d-block")
//    }
  
//   //  if (evt.target.pre(".conditions-inner__box__item__btn5")) {
//   //   elSubList.classList.toggle("d-block");
//   // }

// })