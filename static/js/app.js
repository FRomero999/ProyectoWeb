
document.querySelector("aside.menu-offcanvas span").addEventListener(
    "click", function(){
        document.querySelector("aside.menu-offcanvas").classList.toggle("on")
    }
)

function openModal(dialogo){
    document.querySelector(dialogo).classList.toggle("show");
}