let startButton = document.querySelector("input[type='button']")

startButton.addEventListener("click", startGame)
//nu am trecut functia cu paranteze pt ca altfel i se ia valoarea si aceea
//va fi apelata cand dam click. dar fara paranteze e ca si cum functia
//e o variabila si se apeleaza toata functia la click.

//cand este apasata o tasta , apelam functia pressKey
window.addEventListener("keydown", pressKey)

// functia pressKey manevreaza ce se intampla cu butonul pe care apasam in joc.
function pressKey(event) {
    //mai exista o variabila letter intr-o functie mai jos, dar e var locala si atunci sunt diferite
    //key e o metoda care e utilizata pt orice tasta apasam
    //daca adaugam toUpperCase() atunci fie ca e tasta mica sau mare, va merge functia si va disparea oricum.
    let letter = event.key.toUpperCase()
    
    //gasim primul elem. div care are clasa literei apasate, adica va lua toate elem. care au litera apasata. de ex apasam A, ne ia div-ul cu litera A
    let div = document.querySelectorAll("." + letter)
    //apoi dupa ce este apasata tasta, facem div-ul sa dispara
    div.forEach(div => div.remove())
    div.remove()
}

//daca vrem sa dispara doar cate o litera si nu toate din aceeasi clasa de litere,
//putem scrie doar querySelector fara All, si fara div.forEach

function startGame() {
    //ascunde butonul
    startButton.classList.add("hidden")
    //definim o var interval cu val 1000 ms 
    let interval = 1000
    //cream o noua litera la fiecare secunda (1000 milisecunde)
    setInterval(createNewLetter, interval)
}

//genereaza un nr aleatoriu intre min si max inclusiv
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

//genereaza o litera aleatorie mare intre A si Z
function randomLetter() {
    //generam un cod ascii aleatoriu intre 65 ('A') si 90 ('Z')
    let codeOfA = "A".charCodeAt(0)
    let codeOfZ = "Z".charCodeAt(0)
    let randomCode = randomNumber(codeOfA, codeOfZ)
    //convertim codul ascii in caracterul asociat lui
    return String.fromCharCode(randomCode)
}

//genereaza o culoare aleatorie
function randomColor() {
    let red = randomNumber(0, 255)
    let green = randomNumber(0, 255)
    let blue = randomNumber(0, 255)
    return `rgb(${red},${green},${blue})`
}

//genereaza o pozitie aleatorie intre 0% si 90%
function randomPosition() {
    let position = randomNumber(0, 90)
    return `${position}%`
}




//genereaza un nou element div cu o litera aleatorie si adauga elem. in html
function createNewLetter() {
    let letter = randomLetter()
    let color = randomColor()
    let top = randomPosition()
    let right = randomPosition()
    //cream un nou elem. div (initial este gol si fara stil)
    let div = document.createElement("div")
    //adaugam clasa letter elem. nostru (care are stilizarea in css)
    div.classList.add("letter")
    //setam textul din interiorul div-ului sa fie litera aleatorie
    div.innerText = letter
    //setam culoare in css
    div.style.backgroundColor = color
    //setam top si right in css
    div.style.top = top
    div.style.right = right
    //setam o clasa cu valoarea literei aleatorii
    div.classList.add(letter)
    //adaugam elem. div in body
    document.querySelector("body").appendChild(div)
}