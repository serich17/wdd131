const cards = document.querySelectorAll('.card');
let firstCard, secondCard;

const templeNames = ['temple1', 'temple2', 'temple3', 'temple4']; // Add more temple names
const templeImages = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg']; // Add corresponding image URLs

// Create card pairs with random images
function createCardPairs() {
  const shuffledTempleNames = shuffleArray(templeNames);
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.dataset.name = shuffledTempleNames[i];
    card.style.backgroundImage = `url(${templeImages[i]})`;
  }
}

// Shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

createCardPairs();

cards.forEach(card => {
  card.addEventListener('click', flipCard);
});

function flipCard() {
  // ... (same as before)
}