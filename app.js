let burger = document.querySelector(".burger")
let burger_modal = document.querySelector(".burger_modal")

burger.addEventListener("click" ,  () => {

    burger_modal.classList.toggle("open_modal")
   
})

// car modal

let car_modal = document.querySelector(".car_modal")
let cars__car = document.querySelectorAll(".cars__car")
let close_car = document.querySelector(".close_car")
cars__car.forEach(item => {
    item.addEventListener("click", ()=>{

        
        car_modal.classList.add("car_modal_open")
    })
})

close_car.addEventListener("click", ()=> {

    car_modal.classList.remove("car_modal_open")

})





