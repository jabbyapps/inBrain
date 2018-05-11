const li = document.createElement("li");

li.className = "collection-item";

li.id = "new-item";

li.setAttribute("title", "New Item");

li.appendChild(document.createTextNode("hello world"));

document.querySelector("ul.collection").appendChild(li);

console.log(li);
