const cardsContainer = document.getElementById('cards-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const currentCardSpan = document.getElementById('current-card');
const totalCardsSpan = document.getElementById('total-cards');
let currentCardIndex = 0;


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
// function to create a card element
function createCard(frontText, backText) {
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    cardFront.innerHTML = `<p>${frontText}</p>`;

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    cardBack.innerHTML = `<p>${backText}</p>`;

    cardBody.appendChild(cardFront);
    cardBody.appendChild(cardBack);
    cardWrapper.appendChild(cardBody);

    return cardWrapper;
  }

// Add multiple cards to the container
const cardData = [
    { front: 'Привет (Privet)', back: 'Hello' },
    { front: 'Спасибо (Spasibo)', back: 'Thank you' },
    { front: 'Пожалуйста (Pozhaluysta)', back: 'Please' },
    // Add more card data as needed
  ];

cardData.forEach(data => {
    const card = createCard(data.front, data.back);
    cardsContainer.appendChild(card);
  });


// Show the first card initially
const cards = document.querySelectorAll('.card-wrapper');
if (cards.length > 0) {
  cards[0].style.display = 'block';
  totalCardsSpan.textContent = cards.length;
}


 // Function to update card visibility
 function updateCardVisibility() {
    cards.forEach((card, index) => {
      card.style.display = index === currentCardIndex ? 'block' : 'none';
    });
    currentCardSpan.textContent = currentCardIndex + 1;
  }

  // Add functionality to the Next button
  nextButton.addEventListener('click', () => {
    if (currentCardIndex < cards.length - 1) {
      currentCardIndex++;
      updateCardVisibility();
    }
  });

  // Add functionality to the Previous button
  prevButton.addEventListener('click', () => {
    if (currentCardIndex > 0) {
      currentCardIndex--;
      updateCardVisibility();
    }
  });
