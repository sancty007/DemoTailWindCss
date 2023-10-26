
const myList = ["2 каюты", "4 спальных места", "аудиосистема, кондиционер", "холодильник, микроволновка", "душ, туалет"]
const list = document.querySelector(".myList")
myList.forEach(element => {
const listItem = document.createElement("li")
listItem.textContent = element
list.appendChild(listItem)
});