/* global _ */
/* eslint-disable no-console */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

//
// Player collection
//

const players = [
  {
    name: 'bob',
    hand: [],
    score: 0
  },
  {
    name: 'bill',
    hand: [],
    score: 0
  },
  {
    name: 'brad',
    hand: [],
    score: 0
  },
  {
    name: 'benjamin von cattenstein iii',
    hand: [],
    score: 0
  }
];

//
// cards
//

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

//
// Every day I'm Shuffling
//

const shuffled = [];

function shuffle(deck) {

  while (deck.length !== 0) {
    const card = Math.floor(Math.random() * deck.length);
    shuffled.push(deck[card]);
    deck.splice(card, 1);
  }
}

shuffle(cards);

//
// Lets make a Deal!
//

let count = 1;

function deal(people) {
  for (let i = 0; i < players.length * 2; i++) {


  //   if (count === 1) {
  //     players[0].hand.push(shuffled[i]);
  //     count += 1;
  //   } else if (count === 2) {
  //     players[1].hand.push(shuffled[i]);
  //     count += 1;
  //   } else if (count === 3) {
  //     players[2].hand.push(shuffled[i]);
  //     count += 1;
  //   } else if (count === 4) {
  //     players[3].hand.push(shuffled[i]);
  //     count = 1;
  //   }
  // }
}

deal(players);

//
// score
//

function getScore() {
  for (let i = 0; i < players.length; i++) {
    players[i].score = players[i].hand[0] + players[i].hand[1];
  }
}

getScore();

//
// Winner Winner Chicken Dinner!
//

function winnerWinnerChickenDinner() {
  const winners = [];

  const maxScore = Math.max(
    players[0].score,
    players[1].score,
    players[2].score,
    players[3].score
  );

  for (let i = 0; i < players.length; i++) {
    if (players[i].score === maxScore) {
      winners.push(players[i])
    }
  }

  if (winners.length > 1) {
    tieBreaker(winners);
  }

  console.log('maxScore', maxScore);

  // if (bob === winner) {
  //   return 'bob';
  // } else if (bill === winner) {
  //   return 'bill';
  // } else if (brad === winner) {
  //   return 'brad';
  // } else if (benjamin === winner) {
  //   return 'benjamin';
  // }
}

//
// TieBreaker
//

function tieBreaker(array) {

}

console.log(`${winnerWinnerChickenDinner()} is the winner!!!!`);
