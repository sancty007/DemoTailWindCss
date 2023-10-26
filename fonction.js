
// creation du tableau , contient des données 
const myList = ["2 каюты", "4 спальных места", "аудиосистема, кондиционер", "холодильник, микроволновка", "душ, туалет"]

const list = document.querySelector(".myList")

// parcours du tableau avec forEach 
myList.forEach(element => {
const listItem = document.createElement("li") // creation du liste 
listItem.textContent = element // Ajout des elemenst du tableau dans liste 

listItem.classList.add("text-xl") // Modification de la taille des disc 
list.appendChild(listItem) // liaision avec la class .myList 
});