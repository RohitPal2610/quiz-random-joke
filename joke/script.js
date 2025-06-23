const generatebtn = document.querySelector(".btn");
const url = "https://api.chucknorris.io/jokes/random";
generatebtn.addEventListener("click",async ()=>{
    const p = document.createElement("p");
    const container = document.querySelector(".joke-container");
    container.innerHTML = '<p>Loading...</p>';
    const respond =await fetch(url);
    let data =await respond.json();
    p.innerHTML = data.value;
    container.innerHTML = "";
    container.append(p);
})