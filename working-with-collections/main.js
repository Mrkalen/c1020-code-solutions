/* global _ */
/* eslint-disable no-console */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

//
// Player collection
//

const players = [
  {
    name: 'bob',
    hand: []
  },
  {
    name: 'bill',
    hand: []
  },
  {
    name: 'brad',
    hand: []
  },
  {
    name: 'benjamin von cattenstein iii',
    hand: []
  }
];

const cards = [
  { rank: 'Ace', suit: 'clubs', value: 11 },
  { rank: 2, suit: 'clubs', value: 2 },
  { rank: 3, suit: 'clubs', value: 3 },
  { rank: 4, suit: 'clubs', value: 4 },
  { rank: 5, suit: 'clubs', value: 5 },
  { rank: 6, suit: 'clubs', value: 6 },
  { rank: 7, suit: 'clubs', value: 7 },
  { rank: 8, suit: 'clubs', value: 8 },
  { rank: 9, suit: 'clubs', value: 9 },
  { rank: 10, suit: 'clubs', value: 10 },
  { rank: 'Jack', suit: 'clubs', value: 10 },
  { rank: 'Queen', suit: 'clubs', value: 10 },
  { rank: 'King', suit: 'clubs', value: 10 },
  { rank: 'Ace', suit: 'diamonds', value: 11 },
  { rank: 2, suit: 'diamonds', value: 2 },
  { rank: 3, suit: 'diamonds', value: 3 },
  { rank: 4, suit: 'diamonds', value: 4 },
  { rank: 5, suit: 'diamonds', value: 5 },
  { rank: 6, suit: 'diamonds', value: 6 },
  { rank: 7, suit: 'diamonds', value: 7 },
  { rank: 8, suit: 'diamonds', value: 8 },
  { rank: 9, suit: 'diamonds', value: 9 },
  { rank: 10, suit: 'diamonds', value: 10 },
  { rank: 'Jack', suit: 'diamonds', value: 10 },
  { rank: 'Queen', suit: 'diamonds', value: 10 },
  { rank: 'King', suit: 'diamonds', value: 10 },
  { rank: 'Ace', suit: 'hearts', value: 11 },
  { rank: 2, suit: 'hearts', value: 2 },
  { rank: 3, suit: 'hearts', value: 3 },
  { rank: 4, suit: 'hearts', value: 4 },
  { rank: 5, suit: 'hearts', value: 5 },
  { rank: 6, suit: 'hearts', value: 6 },
  { rank: 7, suit: 'hearts', value: 7 },
  { rank: 8, suit: 'hearts', value: 8 },
  { rank: 9, suit: 'hearts', value: 9 },
  { rank: 10, suit: 'hearts', value: 10 },
  { rank: 'Jack', suit: 'hearts', value: 10 },
  { rank: 'Queen', suit: 'hearts', value: 10 },
  { rank: 'King', suit: 'hearts', value: 10 },
  { rank: 'Ace', suit: 'spades', value: 11 },
  { rank: 2, suit: 'spades', value: 2 },
  { rank: 3, suit: 'spades', value: 3 },
  { rank: 4, suit: 'spades', value: 4 },
  { rank: 5, suit: 'spades', value: 5 },
  { rank: 6, suit: 'spades', value: 6 },
  { rank: 7, suit: 'spades', value: 7 },
  { rank: 8, suit: 'spades', value: 8 },
  { rank: 9, suit: 'spades', value: 9 },
  { rank: 10, suit: 'spades', value: 10 },
  { rank: 'Jack', suit: 'spades', value: 10 },
  { rank: 'Queen', suit: 'spades', value: 10 },
  { rank: 'King', suit: 'spades', value: 10 }
];

const shuffled = [];

function shuffle(deck) {

  while (deck.length !== 0) {
    const card = Math.floor(Math.random() * deck.length);
    shuffled.push(deck[card]);
    deck.splice(card, 1);
  }
}

let count = 1;

shuffle(cards);

function deal(deck) {
  for (let i = 0; i < players.length * 2; i++) {
    if (count === 1) {
      players[0].hand.push(shuffled[i]);
      count += 1;
    } else if (count === 2) {
      players[1].hand.push(shuffled[i]);
      count += 1;
    } else if (count === 3) {
      players[2].hand.push(shuffled[i]);
      count += 1;
    } else if (count === 4) {
      players[3].hand.push(shuffled[i]);
      count = 1;
    }
  }
}

deal(shuffled);

function winnerWinnerChickenDinner() {
  let bob = 0;
  let bill = 0;
  let brad = 0;
  let benjamin = 0;

  for (let i = 0; i < players.length; i++) {
    if (i === 0) {
      bob = addCards(players[i].hand);
    } else if (i === 1) {
      bill = addCards(players[i].hand);
    } else if (i === 2) {
      brad = addCards(players[i].hand);
    } else {
      benjamin = addCards(players[i].hand);
    }
  }

  const winner = Math.max(bob, bill, brad, benjamin);

  if (bob === winner) {
    return 'bob';
  } else if (bill === winner) {
    return 'bill';
  } else if (brad === winner) {
    return 'brad';
  } else if (benjamin === winner) {
    return 'benjamin';
  }
}

function addCards(hands) {
  let score = 0;
  score = hands[0].value + hands[1].value;
  return score;
}

console.log(`${winnerWinnerChickenDinner()} is the winner!!!!`);
