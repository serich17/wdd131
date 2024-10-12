const button = document.getElementById("mobile-button"); 
const list = document.getElementById("links");
document.getElementById("gallery").addEventListener("click", viewHandler)



function openMenu() {
    if (list.style.display == "none") {
        list.style.display = "block";
    } 

    else {
        list.style.display = "none";
    }
}

function handleResize() {
    const menu = document.querySelector(".mobile-button")
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide")
    }
    else {
        menu.classList.add("hide");
    }
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer" id="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }

function viewHandler(event) {
    const picture = event.target
    console.log(picture)
    if (event.target.tagName == "IMG") {
        let source = ((picture.src).split("-"))[0]
        const imgFile = source + "-full.jpeg"

        const htmlString = viewerTemplate(imgFile, "Full image")
        const body = document.getElementsByTagName("body")[0]
        body.insertAdjacentHTML("afterbegin", htmlString)
        document.getElementById("close-viewer").addEventListener("click", closeViewer)
    }
}

function closeViewer() {
    document.getElementsByClassName("viewer")[0].remove()
}



handleResize()
window.addEventListener("resize", handleResize)


