//wait for window to load
document.addEventListener("DOMContentLoaded", (e) => {
  //get referencr to header object
  let myHeader = document.getElementById("header");

  //wait 3sec, then display the header
  setTimeout(() => {
    myHeader.classList.remove("hidden");
  }, 3000);
});
