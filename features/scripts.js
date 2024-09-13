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