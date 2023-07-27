let myForm = document.querySelector("#test-form")

if(localStorage.getItem("persons") == null){
    var myArray = []
} else {
    myArray = JSON.parse(localStorage.getItem("persons"))
}

myForm.addEventListener("submit", function(event){
    event.preventDefault()

    myArray.push({
        id: "",
        firstName: event.target.elements.firstName.value,
        secondName: event.target.elements.secondName.value,
        crime: event.target.elements.age.value
    })

    event.target.elements.firstName.value = ""
    event.target.elements.secondName.value = ""
    event.target.elements.age.value = ""

    myArrayJSON = JSON.stringify(myArray)
    localStorage.setItem("persons", myArrayJSON)
})

// vypisování do stránky
let toList = document.querySelector(".to-list")
toList.addEventListener("click", function(event){

    if(localStorage.getItem("persons") == null){
        let paragraph = document.createElement("p")
        paragraph.textContent = "Datábáze osob je prázdná..."
        document.querySelector(".list-persons").appendChild(paragraph)
    } else {
        let myStorageJSON = JSON.parse(localStorage.getItem("persons"))

        document.querySelector(".list-persons").innerHTML = ""
    
        myStorageJSON.forEach(function(onePerson){
    
            let paragraph = document.createElement("p")
    
            paragraph.innerHTML = `Jméno: ${onePerson.firstName}<br> Příjmení: ${onePerson.secondName}<br>Věk: ${onePerson.crime}`
    
            paragraph.classList.add("basic-style")
    
            document.querySelector(".list-persons").appendChild(paragraph)
        }) 
    }
})

// filtrování
let nameFilter = document.querySelector(".name-filter")
let myStorageJSON = JSON.parse(localStorage.getItem("persons"))

nameFilter.addEventListener("input", function(event){
    let whatWeSearch = event.target.value

    let ourResults = myStorageJSON.filter(function(onePerson){
        return onePerson.firstName.toLowerCase().includes(whatWeSearch.toLowerCase())
    })
    console.log(ourResults)
})