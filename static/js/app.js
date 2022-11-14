
document.querySelector("aside.menu-offcanvas button").addEventListener(
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


let template = document.querySelector("#plantilla-pelicula")
let animes = document.querySelector("section#peliculas div")

fetch('https://6372ba75348e947299fbfcdb.mockapi.io/api/v0/animes')
    .then( (result) => {
        if(result.ok)
            return result.json()
    })
    .then((output) => {
        
        output.forEach( function(pelicula){

            console.log(pelicula)

            let el = template.content.cloneNode(true);
            el.querySelector("img").setAttribute("src", pelicula.image)
            el.querySelector("h4").textContent = pelicula.title
            el.querySelector("p.autor").textContent = pelicula.autor
            el.querySelector("p.desc").textContent = pelicula.desc
            animes.appendChild(el)

        })
        
}).catch(err => console.error(err))
