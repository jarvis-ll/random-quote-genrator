let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";
let a="";
let getQuote = () => {
  quote.innerText = "";
  author.innerText = "";
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      /*quote.innerText = item.content;*/
      author.innerText = item.author;
      var string = item.content;
var str = string.split("");
var el = document.getElementById('quote');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 60);
})();


    });
    
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
