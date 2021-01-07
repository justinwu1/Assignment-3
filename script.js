// 1) Select the section with an id of container without using querySelector.
let container = document.getElementById("container");
// console.log(container);

// 2) Select the section with an id of container using querySelector.
let container1 = document.querySelector("#container");


// 3) Select all of the list items with a class of "second".

let second = document.querySelectorAll(".second");

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
let ol = document.querySelector("ol").getElementsByClassName("third");


// 5) Give the section with an id of container the text "Hello!".
let sec = document.querySelector("#container");
sec.innerText = "Hello"; 

// 6) Add the class main to the div with a class of footer.
let footer = document.querySelector(".footer");
footer.classList.add("main"); 

// 7) Remove the class main on the div with a class of footer.
let main = document.querySelector("main");
main.classList.remove("main"); 

// 8) Create a new li element.
let li =  document.createElement("li");

// 9) Give the li the text "four".
li.innerText = "four"

// 10) Append the li to the ul element.
let ul = document.querySelector("ul");
ul.appendChild(li);

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
let lis = document.querySelector("ol").getElementsByTagName("li");
for(let i = 0; i < lis.length; i++){
    lis[i].style = "background-color:green";
}

// 13) Remove the div with a class of footer.
let footer1 = document.querySelector(".footer").innerHTML = " ";
console.log(footer1);