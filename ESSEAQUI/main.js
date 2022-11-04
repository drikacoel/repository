const pais = document.querySelector("#name")  
const capital = document.querySelector("#capital")
const language = document.querySelector("#languages")
const continente = document.querySelector("#continente")
const populacao = document.querySelector("#populacao")
const bandeira = document.querySelector("#bandeira")
const nome = document.querySelector("#country")
const submit = document.querySelector("#submit")

  //function myFunction(){
pais.addEventListener("blur", (e)=>{
    //submit.addEventListener("click", (e) => {
        
let search = pais.value

    const options = {
        method: "GET",
        mode: "cors",
        cache: "default"
    }

    fetch(`https://restcountries.com/v2/name/${search}`, options)
    .then(( response) => response.json())
     .then( (data) =>{
      country.innerHTML = "Nome: " + data[0].name
      capital.innerHTML = "Capital: " + data[0].capital
      languages.innerHTML ="Idioma: " + data[0].languages
      continente.innerHTML = "Continente: " + data[0].region
      populacao.innerHTML = "População: " + data[0].population
      bandeira.src = "bandeira: " + data[0].flags.svg
    
    })
    .catch(e => console.log("Deu erro: " + e,))

    })

        
        



