const navbar = document.querySelector('#customNav');
window.onscroll=()=>{
    if(window.scrollY > 100){
        navbar.classList.add('bg-custom-navbar');
    }else{
        navbar.classList.remove('bg-custom-navbar');
    }
}

let countdownDate = new Date("Oct 13, 2023 15:37:25").getTime();
let x = setInterval(function(){
    let currentDate = new Date().getTime();

    let distance = countdownDate - currentDate;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".countdown-holder").innerHTML = '<div class="col-md-3">' +  days + ' days </div> <div class="col-md-3"> ' + hours + ' hours </div> <div class="col-md-3"> ' + minutes + ' minutes </div> <div class="col-md-3"> ' + seconds + " seconds </div>";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Expired";
      }
    }, 1000
);