function bosilganda(){
    window.location.href = "login.html"
}


const click = document.querySelector("#close1");
const box = document.querySelector(".kichikbox #oyna1");
const rasm1 = document.querySelector("#knopka");
const rasmlar = document.querySelectorAll(".qatorlar button");
console.log(rasmlar);

click.onclick = function(){
 box.style.display="none"
}

rasm1.onclick = function(){
 box.style.display="flex"
}




