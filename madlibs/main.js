function init() {

    fetch("./libs.json").then((res) => res.json()).then((json) => processJson(json))

    
  }

function processJson(json) {
    const container = document.querySelector(".madLibOptions")
    Object.keys(json).forEach(lib => {
        container.appendChild(templateMadLib(json[lib]))
    });
    
}

function templateMadLib(madlib) {
    const newDiv = document.createElement("div")
    newDiv.classList.add("minDisplay")
    newDiv.id = madlib.id
    const newh = document.createElement("h2")
    newh.innerText = madlib.name
    const newi = document.createElement("img")
    newi.src = madlib.image
    newi.alt = "MadLib image"
    const newp = document.createElement("p")
    newp.innerText = madlib.description
    newDiv.appendChild(newh)
    newDiv.appendChild(newi)
    newDiv.appendChild(newp)
    newDiv.addEventListener("click", openPage)
    return newDiv

}

function openPage(e) {
    console.log("enter")
    window.location.href = `madlib.html?index=${e.currentTarget.id}`;
}

window.addEventListener("DOMContentLoaded", init); 