/**
 * Shuffle an array in place
 * @param cards Array to shuffle
 */

 export enum Suit {
    Clubs,
    Diamonds,
    Hearts,
    Spades,
 }

 export enum CardNumber {
   Ace,
   Two,
   Three,
   Four,
   Five,
   Six,
   Seven,
   Eight,
   Nine,
   Jack,
   Queen,
   King,
 }

 type Card = [Suit, CardNumber];

 const sample: Card[] = [
   [Suit.Spades, CardNumber.Ace],
 ];

 const test:Card = [0, 6];

function shuffleArray(cards: Card[]) {
  // Iterate over the array
  for (let i = cards.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [cards[i - 1], cards[j]] = [cards[j], cards[i - 1]];
  }
}
export class Dealer {
  cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards || [];
  }

  readCard = (card: Card): string => {
    return `${CardNumber[card[1]]} of ${Suit[card[0]]}`;
  }
}
