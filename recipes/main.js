import recipes from './recipes.mjs';

function __init__() {
    const recipe = [getRandomListEntry(recipes)]

    renderRecipes(recipe)
}


function searchRecipes(e) {
    e.preventDefault()
    const searchText = document.getElementById("search").value.toLowerCase()
    const filteredList = filterRecipes(searchText)

    renderRecipes(filteredList)
}
// fill out the filter function
function filterRecipes(query) {
    const filtered = searchFunction(recipes, query)

    const sorted = filtered.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    return sorted
}

function searchFunction(list, q) {

    function searchCallback(item) {
      return (
        item.name.toLowerCase().includes(q.toLowerCase()) ||
        item.description.toLowerCase().includes(q.toLowerCase()) ||
        item.tags.find((tag) => tag.toLowerCase().includes(q.toLowerCase()))
      );
    }
    const filtered = list.filter(searchCallback);

    return filtered
  }


function renderRecipes(recipe) {
    let content = ""
    for (let i = 0; i< recipe.length; i++) {
        content += recipeTemplate(recipe[i])
    }
    document.querySelector(".recipes").innerHTML = content
}



function generateNumber(range) {
    return Math.floor(Math.random()*range)
}


function getRandomListEntry(list) {
    const randomNum = generateNumber(list.length)
    return list[randomNum]
}

function renderTags(tagList) {
    let tags = ""
    tagList.forEach(tag => {
        tags += `<li>${tag}</li>`
    });
    return tags
}

function returnRatings(ratingNum) {
    let rating = ""
    for (let i=1; i <=5; i++) {
        if (i<=ratingNum) {
            rating += `<span aria-hidden="true" class="icon-star">⭐</span>`
        }
        else {
            rating += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
    }
    return rating
}


function recipeTemplate(recipe) {
    return `<section>
        <img src="${recipe.image}" alt="image of ${recipe.name}">
        <div class="recipe-info">
            <ul class="tags">
              ${renderTags(recipe.tags)}
            </ul>
            <h2>${recipe.name}</h2>
            <span
                class="rating"
                role="img"
                aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${returnRatings(recipe.rating)}
            </span>
            <p class="description">${recipe.description}</p>
        </div>
      </section>`
}


window.onload = __init__
document.querySelector(".img-btn").addEventListener("click", searchRecipes)


