/*Dit is deel I -Elementen toevoegen aan de DOM
Wanneer ik als gebruiker op een button van één van de Big 5 klik, 
wil ik dat die verschijnt in mijn lijstje met "animals spotted".*/

//stap 1 get the data of the buttons, allocate to variable buttons and attach eventlistener to its items!
//Stap 2: append to list of animal spotted through JS
let getListAnimalSpot= document.querySelector("#spotted-animals-list");
let buttons =document.querySelectorAll(".big-five-button");
buttons.forEach((i)=>{
i.addEventListener("click", aftrap);
function aftrap(){
        let item= document.createElement("li")
        item.innerText=i.innerText;
    getListAnimalSpot.appendChild(item)
}
});


/*Vraag: 
waarom we via JS HTLM-data via de selector ophalen en toekennen aan een constante variabel. 
waarom is het in Javascript mogelijk om constante variabelen te bewerken?*/

//Deel 2-element vwerijderen uit de DOM
/*Wanneer ik als gebruiker op de "remove the first item" knop klik wordt de eend die ik op mijn tocht naar 
het vliegveld heb gespot verwijderd (het is toch een beetje een vreemde eend in dit lijstje van de big five). 
De gebruiker kan op deze knop blijven klikken, telkens wordt het eerste item verwijderd.*/

let getRemoveButton= document.querySelector("#remove-first-item-button");
getRemoveButton.addEventListener("click", aftrapRemove);
function aftrapRemove(){
let firstChild= getListAnimalSpot.querySelector("li");
getListAnimalSpot.removeChild(firstChild);
}


//bij elke click dient de aftrapfunctie opnieuw de eerste kind te bepalen!! Zet derhalve de firstChild variabel nadat 
//de functie is afgetrapt!!!
//oplossing via setting innerText as an empty string

let getRemoveButtonAll= document.querySelector("#remove-all-button");
getRemoveButtonAll.addEventListener("click", aftrapAll);
function aftrapAll(){;
    getListAnimalSpot.innerText="";
};
 

