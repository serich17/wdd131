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

async function init() {
    json = await getData();
    setup()

    
  }

  function setup() {
    console.log("Next function is running now.");
    document.querySelector(".button").addEventListener("click", nextQuestion)
    
    const params = new URLSearchParams(window.location.search);
    let index = params.get("index");
    console.log(json)
    console.log(Object.keys(json))
    if (Object.keys(json).includes(index)) {
        console.log("yes")
        console.log(json[index])
    } else {
        console.log("No")
    }
    console.log(index)
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



function nextQuestion() {
    console.log(libs)
    console.log(libs[index])
}












window.addEventListener("DOMContentLoaded", init); 