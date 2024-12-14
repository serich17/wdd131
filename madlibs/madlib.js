async function getData() {
    try {
      const response = await fetch("./libs.json");
      const json = await response.json();  // Convert response to JSON
      // You can now use the 'json' data as a variable within this function
      return json; // Optionally, return the data if needed

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
 // Call the function to fetch the data
let json
let libIndex
let story

async function init() {
    json = await getData();
    setup()

    
  }
  function setup() {
    console.log("Next function is running now.");
    // document.querySelector(".button").addEventListener("click", nextQuestion)
    console.log(Object.keys(json).length)
    const params = new URLSearchParams(window.location.search);
    let index = params.get("index");
    console.log(json)
    console.log(Object.keys(json))
    if (Object.keys(json).includes(index)) {
        console.log("yes")
        console.log(json[index])
        libIndex = index
    } else {
        console.log("No")
        libIndex = getRandomNumber(0, Object.keys(json).length - 1)
        console.log(libIndex)
    }

    startMadLib()
    console.log(json[libIndex].inputs)
}
  function fetchData() {
    let fetchedData;
    fetch("./libs.json")
  .then((res) => res.json()) // Convert response to JSON
  .then((json) => {
    fetchedData = json; // Save the fetched data to the variable
    console.log(fetchedData); // Use the data
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function nextQuestion(i) {
       return new Promise(resolve => {
            const controller = new AbortController();
            const signal = controller.signal;

            const question = json[libIndex].inputs[i].question
            const id = json[libIndex].inputs[i].id
            console.log(question)
            console.log(id)
            const input = document.querySelector(".input")
            input.id = id
            const heading = document.querySelector(".question")
            heading.innerText = question
            const button = document.querySelector(".button");
            button.addEventListener("click", () => {
              console.log("Button clicked!");
              story = story.replace(`{${input.id}}`, input.value)
              input.value = ""
              controller.abort(); 
              resolve(); // Resolve the promise when button is clicked
            }, {signal});
          });

}

async function startMadLib() {
    story = json[libIndex].text
    console.log(story)

    console.log(Object.keys(json[libIndex].inputs).length)

    for (let i=0; i< Object.keys(json[libIndex].inputs).length; i++) {
        await nextQuestion(i)
    }

    document.querySelector(".inputs").removeChild(document.querySelector(".input"))
    document.querySelector(".question").innerText = "Your MadLib is ready! click the button to view"
    const button = document.querySelector(".button")
     button.innerText = "Show Story!"

     button.addEventListener("click", function() {
      document.querySelector(".getValues").style.display = "none"
      const storyView = document.createElement("div")
      storyView.classList.add("getValues")
      storyView.id = "story-class"
      const header = document.createElement("h3")
      header.innerText = json[libIndex].name
      storyView.appendChild(header)
      const pic = document.createElement("img")
      pic.src = json[libIndex].image
      storyView.appendChild(pic)
      const storyText = document.createElement("p")
      storyText.innerText = story
      storyText.classList.add("story")
      storyView.appendChild(storyText)
      const main = document.querySelector(".flex-box")
      main.appendChild(storyView)
      const returnHome = document.createElement("button")
      returnHome.classList.add("button", "return-main")
      returnHome.innerText = "Return"
      returnHome.addEventListener("click", function() {
        window.location.href = "index.html"
      })
      main.appendChild(returnHome)
      
     })
    console.log("done")
    console.log(story)
}

document.querySelector(".input").addEventListener("keypress", function(event) {
  // Check if the Enter key is pressed (keyCode 13)
  if (event.key === "Enter") {
      // Prevent the default form submission behavior (if applicable)
      event.preventDefault(); 

      // Trigger the button click
      document.querySelector(".button").click();
  }
});

window.addEventListener("DOMContentLoaded", init); 