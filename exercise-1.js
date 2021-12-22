window.onload = () => {
    const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
    let ulCountries = document.createElement("ul")
    for(let country of countries) {
        let liCountry = document.createElement("li")
        liCountry.innerText = country
        ulCountries.appendChild(liCountry)
    }
    document.body.appendChild(ulCountries)

    let paraBorrar = document.querySelector(".fn-remove-me")
    paraBorrar.remove()

    const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
    let divParaLlenar = document.querySelector('[data-function="printHere"]')
    let ulParaDiv = document.createElement("ul")
    let agrupador = ""
    cars.forEach((item)=> {
        agrupador += `<li>${item}</li>`
    })
    ulParaDiv.innerHTML = agrupador
    divParaLlenar.appendChild(ulParaDiv)

    const paises = [
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
    ];

    for (let pais of paises){
        let divNuevo = document.createElement("div")
        let h4Title = document.createElement("h4")
        h4Title.innerText = pais.title
        divNuevo.appendChild(h4Title)
        let imgTag = document.createElement("img")
        imgTag.src = pais.imgUrl
        divNuevo.appendChild(imgTag)
        let btnDelete = document.createElement("button")
        btnDelete.textContent = "Borrame!"
        btnDelete.addEventListener("click", () => {
            divNuevo.remove()
        })
        divNuevo.appendChild(btnDelete)
    document.body.appendChild(divNuevo)
                            }
    
    let listadoDiv = document.querySelectorAll("div")
    let divConListado = listadoDiv[1]
    let btnEliminar = document.createElement("button")
    btnEliminar.innerText = "Eliminar ult"
    bynEliminar.addEventListener("click", () => {
        listadoDiv[listadoDiv.length - 1].remove()
    })
    document.body.appendChild(btnEliminar)


}