
// einen string (text/wort) in die console ausgeben
console.log("Hello welt")

// variablen erstellen und einen wert zuweisen
let x = 25;
let y = 8;

// die beiden erstellten variablen in der console ausgeben
console.log("X: " + x) 
console.log("Y: " + y) 

// eine funktion aufrufen und die beiden variablen als parameter übergeben
// der rückgabe wert der funktion wird in die variable ergebnis gespeichert
let ergebnis = addition(x, y)

// das ergebnis ausgeben
console.log("Ergebnis: " + ergebnis) 

// hier wird eine funktion definiert mit den name addition
// zahl1 und zahl2 sind parameter in welche die werte geschrieben werden
function addition(zahl1, zahl2){

    console.log("Addition funktion wurde aufgerufen")
    // gebe den wert zurück
    // hier in dem fall zahl1 plus zahl2 ( die beiden parameter addiert)
    return zahl1 + zahl2
}

// variablen mit Text/Wörtern als inhalt
let wort = "Hallo"
let wort2 = "Welt"
console.log(wort)
console.log(wort2)
// zusammenfügen der wörter mit +
console.log(wort + " " + wort2 )

// wenn bedingung
if(ergebnis >= 15){
    console.log("Bedinung ist wahr")
}else{
    console.log("Bedingung ist falsch")
}

console.log("while schleife")

// solange die bedingung wahr ist führe die befehle aus dem 
let counter = 2
while(counter <= 10){
    counter += 1
    console.log(counter)
}

console.log("For schleife")

for(let i = 0; i <= 10; i++){
    console.log(i)
}

//hier wird ein array (Liste an variablen) erstellt
let namen = ["Oskar", "Max", "Max", "Anton", "Gamal", "Ruben","Malin","Xavier","marie"]
// hier lassen wir uns die länge des arrays geben ( namen ist eine )
let length = namen.length

// hier eine funktion welche aufgerufen wird wenn ein Button gedrückt wird
function ladeNamen(){
    document.getElementById("heading1").innerText = "JavaScript ist nice"

    // eine schleife welche von null bis zum ende des arrays zählt
    for(let i = 0; i < length; i++){
        let name = namen[i]
        
        let element = document.createElement("h2")
        element.innerText = "hallo " + name
    
        document.getElementById("namen").appendChild(element)
    }
}

// 
let progress = 10

function progressBar(){
    if(progress >= 100){
        progress = 0
    }
    progress += 10 
    document.getElementById("file").value = progress
}

function changeStyle(){
    document.getElementById("heading1").classList.add("farbig")
}



let klasse = [
    {
        name:"Oskar",
        alter:22,
        klasse: "A18.4"
    },
    {
        name:"Max",
        alter:25,
        klasse: "D7"
    },
    {
        name:"Anton",
        alter:15,
        klasse: "9c"
    },
    {
        name:"Max",
        alter:14,
        klasse: "9c"
    }
]

for(let i = 0; i < klasse.length; i++){
    let schueler = klasse[i]
    let elemt = document.createElement("p")
    elemt.innerText = schueler.name +" ist " + schueler.alter + " Jahre alt und in der Klasse: " + schueler.klasse

    document.getElementById("klasse").appendChild(elemt)
}



let ausbildung = [
    {
        name:"Friedrich Schiller Gymnasium",
        zeitraum:"2010 - 2018",
        info: "MINT Schule"
    },
    {
        name:"Falk Grundschule",
        zeitraum:"2006 - 2010",
        info: "Info über die schule"
    }
]

for(let i = 0; i < ausbildung.length; i++){
    let schule = ausbildung[i]

    let div = document.createElement("div")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")

    p1.classList.add("schule")
    p1.innerText = schule.zeitraum + " | " + schule.name

    p2.classList.add("gray")
    p2.innerText = schule.info

    div.appendChild(p1)
    div.appendChild(p2)

    document.getElementById("ausbildung").appendChild(div)

}



function showImage(){
    document.getElementById("bild1").classList.toggle("hidden")
}


function updateChart(){
    let test = myChart.data.datasets[0].data[0]
    myChart.data.datasets[0].data[0] = test += 1
    myChart.update()
}
