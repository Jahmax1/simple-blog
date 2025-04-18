console.log("Blog website loaded!");

window.onload = function() {
    const dateElement = document.createElement("p");
    dateElement.textContent = "Today is " + new Date().toDateString();
    document.querySelector("header").appendChild(dateElement);
  };