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
    console.log("done")


}









window.addEventListener("DOMContentLoaded", init); 