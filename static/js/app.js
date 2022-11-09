
document.querySelector("aside.menu-offcanvas span").addEventListener(
    "click", function(){
        document.querySelector("aside.menu-offcanvas").classList.toggle("on")
    }
)

function openModal(dialogo){
    document.querySelector(dialogo).classList.toggle("show");
}

var enlacesDataDialog = document.querySelectorAll("[data-dialog]")

enlacesDataDialog.forEach( function(el){
    el.addEventListener("click", function(){
        openModal(this.dataset.dialog)
    })
})

let el = document.querySelector("#login [data-dialog]")
el.addEventListener("click",function(){
    let nombre = document.querySelector("input[name=nombre]").value
    document.querySelector("a.menu_usuario").innerText = nombre
})


